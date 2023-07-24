const mongoose = require("mongoose");

const Parent = mongoose.model('Parent ', {
    name: String,
    lastname: String,
    password: String,
    number:Number,  
    age:Number,
    username:{
    type:String,
    unique:true
    }
});

module.exports = Parent