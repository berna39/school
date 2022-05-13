const mongoose = require('mongoose');

const { Schema } = mongoose;

const User = new Schema({
    name: String,
    user_name: String,
    age: Number,
    password: String,
    type: { type: Number, default: 0 },
    created: { type: Date, default: Date.now }
});

module.exports = mongoose.model('users', User);
