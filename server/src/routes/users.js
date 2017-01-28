import express from 'express';
import mongoose from 'mongoose';
import passwordHash from 'password-hash';
import jwt from 'jsonwebtoken';

import '../models/User/User';
import config from '../../config';
import signupValidation from '../Util/signUpValidation';
import loginValidation from '../Util/loginValidation';

const router = express.Router();
const User = mongoose.model('User');

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
                    description: 'Заполните описание и социальные сети, нажав кнопку "Редактировать"',
                    //mainImage: 'no_image.jpg',
                    //backgroundImage: 'bg-profile.jpg',
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

    User.findById(userData.id).then((data) => {
        if(data) {
            data.username = userData.username === '' ? data.username : userData.username;
            data.description = userData.description === '' ? data.description : userData.description;
            data.mainImage = userData.mainImage !== '' ? userData.mainImage : data.mainImage;
            data.backgroundImage = userData.backgroundImage !== '' ? userData.backgroundImage : data.backgroundImage;
            data.socials.vk = userData.socials.vk ? userData.socials.vk : data.socials.vk;
            data.socials.fb = userData.socials.fb ? userData.socials.fb : data.socials.fb;
            data.socials.twitter = userData.socials.twitter ? userData.socials.twitter : data.socials.twitter;
            data.socials.google = userData.socials.google ? userData.socials.google : data.socials.google;
            data.socials.email = userData.socials.email ? userData.socials.email : data.socials.email;
            data.save();
            res.status(200).send();
        } else {
            res.status(400).send();
        }
    });
});

router.post('/info', (req, res) => {
    const id = req.body.id;

    User.findById(id, { username: 1, description: 1, socials: 1, mainImage: 1, backgroundImage: 1, _id: 0 }).then((data) => {
        if(data) {
            res.status(200).json(data);
        } 
        })
        .catch(() => {
            res.status(400).send();
        });
});

export default router;
