const mongoose = require("mongoose");

const User = mongoose.model('User', {
    name: {
        type: String,
        required: true 
    },
    username: {
        type: String,
        unique: true,
        required: true 
    },
    password: {
        type: String,
        required: true 
    },
    age:  {
        type: Number,
        required: true 
    },
    lastname:  {
        type: String,
        required: true 
    },
    number: {
        type: Number,
        required: true 
    },
    sinf:  {
        type: String,
        required: true 
    },
    students: {
        type: Array,
        required: true 
    },
});

module.exports = User
