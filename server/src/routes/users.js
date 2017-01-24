import express from 'express';
import mongoose from 'mongoose';
import passwordHash from 'password-hash';
import jwt from 'jsonwebtoken';

import { setUpConnection } from '../Util/DataBaseUtils';
import '../models/User/User';
import config from '../../config';
import signupValidation from '../Util/signUpValidation';
import loginValidation from '../Util/loginValidation';

const router = express.Router();
const User = mongoose.model('User');

//setUpConnection();

router.post('/register', (req, res) => {
    let user = req.body;

    User.findOne({ 'email': `${user.email}` }).then((data) => {
        if(data) res.status(400).json({ 'email': 'Пользователь с таким email уже существует' });
        else {
            const { errors, isValid } = signupValidation(user);
            if(isValid) {  
                user.password = passwordHash.generate(user.password);
                user = new User({
                    username : user.username,
                    email: user.email,
                    password: user.password,
                    description: '',
                    mainImage: 'NULL',
                    backgroundImage: 'NULL',
                    socials: { email: user.email },
                    albums: [ ]
                });
                user.save()
                    .then(() => {
                        res.status(200).send();
                    })
                    .catch(() => {
                        res.status(500).send();
                    })
            } else {
                res.status(400).json(errors);
            }
        }
    });
});

router.post('/signin', (req, res) => {
    const user = req.body;
    const { errors, isValid } = loginValidation(user);
    let token;
    if(isValid) {
        User.findOne( { 'email': `${user.email}` }).then((data) => {
            if( data ) {
                if(passwordHash.verify(user.password, data.password)) {
                    token = jwt.sign({
                    id: data._id,
                    email: data.email
                    }, config.jwtSecret);
                    res.status(200).json({ token });
                } else {
                    console.log('Проблема пароль');
                    res.status(500).send();
                }
            } else {
                res.status(500).send();
            }
        });
    } else {
        res.status(400).json(errors);
    }
});

router.post('/edit', (req, res) => {
    const userData = req.body;

    User.findById(userData._id).then((data) => {
        if(data) {
            data.mainImage = userData.mainImage;
            data.backgroundImage = userData.backgroundImage;
            data.socials = userData.socials;
            data.save();
            res.status(200).send();
        } else {
            res.status(400).send();
        }
    });
});

router.post('/info', (req, res) => {
    const id = req.body._id;

    User.findById(id, { updatedAt: false, createdAt: false, password: false, __v: false }).then((data) => {
        if(data) {
            res.status(200).json(data);
        } 
        })
        .catch(() => {
            res.status(400).send();
        });
});

export default router;
