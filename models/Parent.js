const mongoose = require("mongoose");

const Parent = mongoose.model('Parent ', {
    name: {
        type: String,
        required: true 
    },
    lastname: {
        type: String,
        required: true 
    },
    username: {
        type: String,
        required: true,
        unique:true
    },
    password: {
        type: String,
        required: true
    },
    number: {
        type: Number,
        required: true
    },
    age: {
        type: Number,
        required: true
    } 
});

module.exports = Parent