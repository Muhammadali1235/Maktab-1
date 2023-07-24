const mongoose = require("mongoose")


const Lesson = mongoose.Schema({
    sinf: {
        type: String,
        required: true 
    },
    vaqti:  {
        type: String,
        required: true 
    },
    subject:  {
        type: String,
        required: true 
    },
    teacherName: {
        type: String,
        required: true 
    }
})


module.exports = mongoose.model("Lesson", Lesson)