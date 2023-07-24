const router = require("express").Router()
const Lesson = require("../models/Teacher")

router.get("/get", async (req, res) => {
    try {
        const lesson = await Lesson.find();
        res.send(lesson);
    } catch (error) {
        res.status(500).send("Error retrieving cats");
    }
})

router.post("/create", async (req, res) => {
    const newLesson = new Lesson({
        sinf: req.body.sinf,
        vaqti: req.body.vaqti,
        subject: req.body.subject,
        teacherName: req.body.teacherName
    })
    await newLesson.save()
        .then(() => res.status(201).send("yaratildi"))
        .catch(error => res.status(404).send("this class was create"))
})

router.put("/update/:id", async (req, res) => {
    const lesson = await Lesson.findById(req.params.id);
    lesson.sinf = req.body.sinf
    await lesson.save()
        .then(() => res.status(201).send("o'zgartirildi"))
        .catch(error => res.status(404).send("error bor"))
})

router.delete("/delete/:id", async (req, res) => {
    const lesson = await Lesson.findByIdAndDelete(req.params.id);
    await res.send(`lesson deleted ${lesson.sinf}`)
})

module.exports = router