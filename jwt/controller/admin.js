import userData from "../models/userData.js"
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

export const home = (req, res) => {
    res.render('home')
}
export const login = (req, res) => {
    res.render('login')
}
export const logProfile = async (req, res) => {
    const { name, password } = req.body

    const user = await userData.findOne({ name })

    if (!user) {
        return res.json({
            message: 'invalid user'
        })
    }

    bcrypt.compare(password, user.password, async function (err, result) {
        if (result) {
            const token = await jwt.sign({ name: name }, 'lovey')
            res.render('about', { token })
        } else {
            return res.json({
                message: 'wrong password'
            })
        }

    })

}

export const register = (req, res) => {
    res.render('register')
}

export const regProfile = async (req, res) => {
    const { name, password } = req.body
    const user = await userData.findOne({ name })

    if (user) {
        return res.json({
            message: 'name not available '
        })
    }

    bcrypt.genSalt(10, function (err, salt) {
        bcrypt.hash(password, salt, function (err, hash) {
            userData.create({
                name: name,
                password: hash
            })
        })
    })


    res.redirect('/login')
}

export const about = (req, res) => {

}

