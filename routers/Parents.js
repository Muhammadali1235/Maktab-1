const User = require("../models/Parent")
const router = require("express").Router()
const bcrypt = require("bcrypt")
const { checkUser } = require("../middleware/Auth")


router.get("/get", async (req, res) => {
    try {
        const users = await User.find();
        res.send(users);
    } catch (error) {
        res.status(500).send("User topilmadi");
    }
})
router.post("/create", async (req, res) => {
    let password = req.body.password
    let salt = 15

    bcrypt.genSalt(salt, function (err, salt) {
        bcrypt.hash(password, salt, async function (err, hashpassword) {
            if (err) {
                console.log("xato bor")
            } else {
                const newUser = new User({
                    username: req.body.username,
                    password: hashpassword,
                    name: req.body.name,
                    age: req.body.age,
                    lastname: req.body.lastname,
                    number: req.body.number
                });
                await newUser.save()
                    .then(() => res.status(201).send(newUser))
                    .catch(error => res.status(404).send("Bu user allaqachon yaratilgan"))
            }
        });
    });
})

router.delete("/delete/:id", async (req, res) => {
    const user = await User.findByIdAndDelete(req.params.id);
    await res.send(` ${user.name} o'chirib tashlandi `)
})
router.put("/update/:id", async (req, res) => {
    const user = await User.findById(req.params.id);
    user.name = req.body.name,
    user.age =  req.body.age,
    user.number = req.body.number
    await user.save()
        .then(() => res.status(201).send("User yangilandi"))
        .catch(error => res.status(404).send("Nimadir xato ketdi"))
})

router.post("/login", checkUser, async (req, res) => {

    res.status(200).send("Saytga xush kelibsiz")

})


module.exports = router