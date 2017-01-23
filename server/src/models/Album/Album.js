import mongoose from 'mongoose';

const schema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
    },
    mainImage: {
        type: String,
        required: true,
    },
    userID: {
        type: String,
    },
    likesCount: {
        type: Number,
    },
    commentsCount: {
        type: Number,
    },
    imagesCount: {
        type: Number,
    },
    images: {
        type: Array
    }
}, {
    timestamps: true
});

mongoose.model('Album', schema);