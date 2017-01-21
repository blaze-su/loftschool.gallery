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

setUpConnection();

router.get('/', (req, res) => {
    res.send('users are here');
});

router.post('/register', (req, res) => {
    let user = req.body;
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
                res.status(200);
            })
            .catch(() => {
                res.status(500);
            })
    } else {
        res.status(400).json(errors);
    }
});

router.use('/signin', (req, res) => {
    const user = req.body;
    const { errors, isValid } = loginValidation(user);
    let token;
    if(isValid) {
        User.findOne({ 'username': `${user.username}` }).then((data) => {
            console.log('Response ', data);
            if( data ) {
                if(passwordHash.verify(user.password, data.password)) {
                    token = jwt.sign({
                    id: data._id,
                    username: data.username
                    }, config.jwtSecret);
                    console.log('Token ', token);
                    res.status(200).json({ token });
                } else {
                    console.log('Проблема пароль');
                    res.status(500).send();
                }
            } else {
                console.log('Проблема пользователь');
                res.status(500).send();
            }
        });
    } else {
        res.status(400).json(errors);
    }
});

router.use('/edit', (req, res) => {
    const userData = req.body;

    User.findById(userData._id).then((data) => {
        console.log('Редакт данные', data);
        if(data) {
            data.mainImage = userData.mainImage;
            data.backgroundImage = userData.backgroundImage;
            data.socials = userData.socials;
            data.save();
            res.status(200).send();
        } else {
            console.log('Проблема редактирование');
            res.status(400).send();
        }
    });
});

export default router;
