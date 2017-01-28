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
    const id = req.body.id;
    let userId;

    Image.remove({albumId: id})
        .then(() => {
            console.log('Начало');
            return Album.findById(id);
        })
        .then((album) => {
            console.log('Начало пользователь');
            userId = album.userID;
            return User.findById(userId);
        })
        .then((user) => {
            console.log('Получение пользователь');
            let albums = user.albums;
            console.log(albums);
            albums = [...albums.slice(0, albums.indexOf(id)), ...albums.slice(albums.indexOf(id)+1)];
            user.albums = albums;
            return user.save();
        })
        .then(() => {
            console.log('Начало альбом');
            return Album.remove({_id: id});
        })
        .then(() => {
            res.status(200).send();
        })
        .catch(() => {
            res.status(400).send();
        })
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

router.post('/edit', (req,res) => {
    const albumData = req.body;

    console.log(albumData);

    Album.findById(albumData.id)
        .then(album => {
            console.log('Альбом');
            album.title = albumData.title;
            album.description = albumData.description;
            album.mainImage = albumData.mainImage !== 'NO_IMAGE' ? albumData.mainImage : album.mainImage;

            return album.save();
        })
        .then(() => {
            console.log('удаление карттинки');
            if(albumData.mainImage !== 'NO_IMAGE') return Image.remove({albumId: albumData.id, isMainPhoto: true});
        })
        .then(() => {
            console.log('создание картинки');
            if(albumData.mainImage !== 'NO_IMAGE') {
                const image = new Image({
                    title: 'Фотография без названия',
                    description: '',
                    image: albumData.mainImage,
                    userId: albumData.userId,
                    userImage: albumData.userImage,
                    albumId: albumData.id,
                    albumTitle: albumData.title,
                    likesCount: 0,
                    commentsCount: 0,
                    usersLiked: [],
                    comments: [],
                    isMainPhoto: true
                });
                return image.save();
            }
        })
        .then(() => {
            res.status(200).send();
        })
        .catch((err) => res.status(400).json({err}));
});

export default router;