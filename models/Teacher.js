const mongoose = require("mongoose")

const Teacher = mongoose.model("Teacher", {
    name: {
        type: String,
        required: true 
    },
    lastname: {
        type: String,
        required: true 
    },
    subject:  {
        type: String,
        required: true 
    },
    tel:  {
        type: Number,
        required: true 
    },
    username:  {
        type: String,
        required: true 
    },
    password:  {
        type: String,
        required: true 
    }
})

module.exports = Teacher