const bcrypt = require("bcryptjs");
const Teacher = require("../models/Teacher")
const User = require("../models/User");
async function checkUser(req, res, next) {
    const { username, password } = req.body;
    console.log(username)
    try {
        const user = await User.findOne({ username });
        console.log(user)
        if (!user) {
            res.status(401).send("User topilmadi");
        } else {
            const validPassword = await bcrypt.compare(password, user.password);
            if (!validPassword) {
                res.status(401).send("password no 'to'g'ri");
            } else {
                next()
            }
        }
    } catch (error) {
        res.status(500).send("xato bor");
    }
}

async function chackUser(req, res, next) {
    const { username, password } = req.body;
    console.log(username)
    try {
        const user = await Teacher.findOne({ username });
        console.log(user)
        if (!user) {
            res.status(401).send("User topilmadi");
        } else {
            const validPassword = await bcrypt.compare(password, user.password);
            if (!validPassword) {
                res.status(401).send("password no'to'g'ri");
            } else {
                next()
            }
        }
    } catch (error) {
        res.status(500).send("xato bor");
    }
}

module.exports = { checkUser }