import userData from "../model/user.js"
import bcrypt from 'bcrypt'
import jwt from "jsonwebtoken"
import data from "../model/data.js"


let genToken = (name) => {
    let token = jwt.sign({ name: name }, 'lovey')
    return token;
}

export const home = (req, res) => {
    res.render('home')
}

export const getFile = (req, res) => {
    console.log(req.body)
}

export const gallery = async (req, res) => {
    const images = await data.find()
    console.log(images)
    res.render('gallery', { images })
}
export const login = (req, res) => {
    res.render('login')
}


export const logProfile = async (req, res) => {
    const { name, password } = req.body
    const user = await userData.findOne({ name })

    if (!user) {
        return res.json({
            message: 'not a user'
        })
    }

    bcrypt.compare(password, user.password, function (err, result) {
        if (result) {
            let token = genToken(name)
            return res.render('dashboard', { token })

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
            message: 'already a user'
        })
    }


    bcrypt.genSalt(10, function (err, salt) {
        bcrypt.hash(password, salt, function (err, hash) {
            userData.create({
                name, password: hash
            })
        })
    })

    res.redirect('/register')


}

export const dash = (req, res) => {
    console.log(token)
    res.render("dashboar")
}