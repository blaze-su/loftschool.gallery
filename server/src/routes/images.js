import express from 'express';
import mongoose from 'mongoose';

import '../models/Image/Image';

const router = express.Router();
const Image = mongoose.model('Image');

router.post('/add', (req,res) => {
    let images = req.body;
    let forDB = [];

    images.forEach((item) => {
        let image = new Image({
            title: 'Фотография без названия',
            description: '',
            image: item.image,
            userId: item.userId,
            albumId: item.albumId,
            likesCount: 0,
            commentsCount: 0,
            usersLiked: [],
            comments: [],
            isMainPhoto: item.isMainPhoto
        });
        forDB.push(image);
    });

    Image.create(forDB)
        .then(() => {
            res.status(200).send();
        })
        .catch(err => {
            console.log(err);
            res.status(400).send();
        });

    
});

router.post('/delete', (req,res) => {
    const id = req.body.id;

    Image.findByIdAndRemove(id)
        .then((data) => { res.status(200).send() })
        .catch((err) => { res.status(400).send() });
});

export default router;