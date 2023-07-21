const mongoose = require("mongoose")

const Teacher = mongoose.model("Teacher", {
    name: String,
    lastname: String,
    subject: String,
    tel: Number,
    username: String,
    password: String
})

module.exports = Teacher