const mongoose = require("mongoose");

const User = mongoose.model('User', {
    name: String,
    username: {
        type: String,
        unique: true
    },
    password: String,
    age: Number,
    lastname: String,
    number: Number
});

module.exports = User