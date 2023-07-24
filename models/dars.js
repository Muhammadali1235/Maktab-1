const mongoose = require("mongoose")


const Lesson = mongoose.Schema({
    sinf: String,
    vaqti: String,
    subject: String,
    teacherName: String
})


module.exports = mongoose.model("Lesson", Lesson)