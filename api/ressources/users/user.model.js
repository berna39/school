const mongoose = require('mongoose');

const { Schema } = mongoose;

const User = new Schema({
    name: {
        type: String,
        required: true,
        min: 6,
        max: 191,
    },
    user_name: {
        type: String,
        required: true,
        min: 6,
        max: 191,
    },
    age: {
        type: Number,
        required: true,
        min: 1,
    },
    password: {
        type: String,
        required: true,
        min: 6,
        max: 191,
    },
    type: { type: Number, default: 0 },
    created: { type: Date, default: Date.now },
});

module.exports = mongoose.model('users', User);
