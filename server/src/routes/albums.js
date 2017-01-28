import express from 'express';
import mongoose from 'mongoose';
import { map } from 'lodash';

import '../models/Album/Album';
import '../models/User/User';
import '../models/Image/Image';

const router = express.Router();
const Album = mongoose.model('Album');
const User = mongoose.model('User');
const Image = mongoose.model('Image');

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
                res.status(200).json({ albumId: data._id, title: data.title });
            })
            .catch(() => { res.status(400).json({ src: 'adding to user' }); });
        })
        .catch(() => { res.status(400).json({ src: 'creating album' }); });
});

router.post('/delete', (req,res) => {

});

router.post('/getUserAlbums', (req,res) => {
    const id = req.body.id;
    let albums = [];
    User.findById(id).then(user => { 
        user.albums.forEach(albumId => {
            albums.push({ _id: albumId });
        });
        Album.find({ $or: albums }, { title: 1, description: 1, mainImage: 1, imagesCount: 1 })
            .then(albumData => {
                albums = albumData;
                res.status(200).json(albums);
            })
            .catch(() => { res.status(400).send(); });
    })
    .catch(() => { res.status(400).send(); });
});

router.post('/getAlbumInfo', (req,res) => {
    const id = req.body.id;
    let response = {};
    Album.findById(id, {_id: 0, createdAt: 0, updatedAt: 0, __v: 0})
        .then(album => {
            map(album._doc, (field, index) => response[index] = field);
            Image.find({ albumId: id }, { likesCount: 1, commentsCount: 1, title: 1, image: 1, comments: 1 })
                .then((images) => {
                    response.images = images;
                    User.findById(album.userID, { _id: 0, mainImage: 1, username: 1 })
                        .then(data => {
                            response.username = data.username;
                            response.userImage = data.mainImage === undefined ? 'no_photo.jpg' : data.mainImage;
                            res.status(200).json(response);
                        })
                        .catch(() => res.status(400).send());
                })
                .catch(() => res.status(400).send());
        })
        .catch(() => res.status(400).send());
});

export default router;