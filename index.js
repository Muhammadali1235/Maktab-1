const express = require("express")
const app = express()
const Teacher = require("./routers/Teachers")
const Users = require("./routers/Users")
const Lesson = require("./routers/dars")
const mongoose = require("mongoose")
const cors = require("cors")
app.use(express.json())
app.use(cors())

const url = "mongodb+srv://rahimjonovmuhammadali1:muhammadali123@muhammadali.hckhbhr.mongodb.net/maktab?retryWrites=true&w=majority"
mongoose.connect(url)
    .then(res => console.log("ishladi"))
    .catch(error => console.log(error))


app.use("/users", Users)
app.use("/teacher", Teacher)
app.use("/lesson", Lesson)

let PORT = 6000
app.listen(PORT, () => {
    console.log(`bizning sayt port ${PORT}da eshitilmoqda`)
})