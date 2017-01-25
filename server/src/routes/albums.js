import express from 'express';
import mongoose from 'mongoose';

import '../models/Album/Album';
import '../models/User/User';

const router = express.Router();
const Album = mongoose.model('Album');
const User = mongoose.model('User');

router.post('/add', (req,res) => {
    const album = new Album({
        title: req.body.title,
        description: req.body.description,
        mainImage: req.body.mainImage,
        userID: req.body.userID,
        likesCount: 0,
        commentsCount: 0,
        imagesCount: 0,
        images: []
    });

    album.save()
        .then((data) => {
            User.findById(album.userID)
            .then(user => {
                user.albums.push(data._id);
                user.save();
                res.status(200).json({albumId: data._id});
            })
            .catch(() => { res.status(400).json({ src: 'adding to user' }); });
        })
        .catch(() => { res.status(400).json({ src: 'creating album' }); });
});

router.post('/delete', (req,res) => {

});

export default router;