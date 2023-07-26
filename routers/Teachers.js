const Teacher = require("../models/Teacher")
const router = require("express").Router()
const bcrypt = require("bcrypt")
const { checkUser } = require("../middlewares/Auth")

router.get("/get", async (req, res) => {
    try {
        const teacher = await Teacher.find()
        res.send(teacher)
    } catch (error) {
        res.status(500).send("Error retwing cats")
    }
})

router.post("/create", async (req, res) => {
    let password = req.body.password
    let salt = 15

    bcrypt.genSalt(salt, function (err, salt) {
        bcrypt.hash(password, salt, async function (err, hashpassword) {
            if (err) {
                console.log("xato bor1")
            } else {
                const newUser = new Teacher({
                    name: req.body.name,
                    lastname: req.body.lastname,
                    subject: req.body.subject,
                    tel: req.body.tel,
                    username: req.body.username,
                    password: hashpassword
                });
                await newUser.save()
                    .then(() => res.status(201).send("yaratildi"))
                    .catch(error => res.status(404).send("Bu user allaqachon yaratilgan"))
            }
        });
    });
})


router.delete("/delete/:id", async (req, res) => {
    const teacher = await Teacher.findByIdAndDelete(req.params.id)
    await res.send(` ${teacher.name} o'chirildi`)
})

router.put("/update/:id", async (req, res) => {
    const user = await Teacher.findById(req.params.id);
    user.name = req.body.name
    await user.save()
        .then(() => res.status(201).send("User yangilandi"))
        .catch(error => res.status(404).send("Nimadir xato ketdi"))
})

router.post("/login", checkUser, async (req, res) => {

    res.status(200).send("saytgaxush kelibsiz")

})
module.exports = router