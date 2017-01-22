import mongoose from 'mongoose';

const schema = new mongoose.Schema({
    title: {
        type: String
    },
    description: {
        type: String
    },
    image: {
        type: String,
        required: true
    },
    userId: {
        type: String,
        required: true
    },
    albumId: {
        type: String,
        required: true
    },
    likesCount: {
        type: Number,
        required: true
    },
    commentsCount: {
        type: Number,
        required: true
    },
    usersLiked: {
        type: Array
    },
    comments: {
        type: Array
    },
    isMainPhoto: {
        type: Boolean,
        required: true
    }
}, {
    timestamps: true
});

mongoose.model('Image', schema);