const mongoose = require("mongoose");

const Sinf = mongoose.Schema({
    son:Number,
    harf:String
});

module.exports = mongoose.model("sinf",Sinf)