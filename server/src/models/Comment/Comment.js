import mongoose from 'mongoose';

const schema = new mongoose.Schema({
    text: {
        type: String,
        required: true
    },
    userId: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

mongoose.model('Comment', schema);