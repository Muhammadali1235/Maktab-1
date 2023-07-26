const mongoose = require("mongoose");

const Sinf = mongoose.Schema({
    son:{
        type:Number,
        required:true
    },
    harf:{
        type:String,
        required:true
    }
});

module.exports = mongoose.model("sinf",Sinf)