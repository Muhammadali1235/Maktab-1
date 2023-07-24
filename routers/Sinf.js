const Sinf = require("../models/Sinf")
const router = require("express").Router()


router.get("/get", async (req, res) => {
    try {
        const users = await Sinf.find();
        res.send(users);
    } catch (error) {
        res.status(500).send("User topilmadi");
    }
})
router.post("/create", async (req, res) => {
    const newSinf = new Sinf({
        son: req.body.son,
        harf: req.body.harf
    });
    await newSinf.save()
        .then(() => res.status(201).send("Sinf yaratildi "))
        .catch(error => res.status(404).send("Bu sinf yaratilgan"))

});


router.delete("/delete/:id", async (req, res) => {
    try {
        const user = await Sinf.findByIdAndDelete(req.params.id);
        await  res.status(201).send(`o'chirib tashlandi  `) 
    } catch (error) {
        res.status(500).send("Nimadir xato ketdi");   
    }

})
router.put("/update/:id", async (req, res) => {
    const user = await Sinf.findById(req.params.id);
    user.son = req.body.son
    user.harf = req.body.harf
    await user.save()
        .then(() => res.status(201).send("Sinf yangilandi"))
        .catch(error => res.status(404).send("Nimadir xato ketdi"))
})
module.exports = router