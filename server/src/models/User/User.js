import mongoose from 'mongoose';

const schema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        tolowercase: true
    },
    email: {
        type: String,
        required: true,
        tolowercase: true
    },
    password: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true
    },
    mainImage: {
        type: String,
    },
    backgroundImage: {
        type: String,
    },
    socials: {
        type: Object,
    },
    albums: {
        type: Array,
    }
}, {
    timestamps: true
});

mongoose.model('User', schema);