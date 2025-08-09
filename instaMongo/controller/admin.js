import formData from "../models/formData.js"
import jwt from 'jsonwebtoken'

export const home = (req, res) => {
    res.render('home')
}
export const login = (req, res) => {
    res.render('login')
}
export const logProfile = async (req, res) => {
    const { name, password } = req.body
    const user = await formData.findOne({ name })
    if (!user) {
        return res.json({
            message: 'Not a user Register first'
        })
    }

    const isUser = password === user.password

    if (!isUser) {
        return res.json({
            message: 'Wrong password'
        })
    }

    const token = await jwt.sign({ name: name }, 'lovey')
    


}


export const registration = (req, res) => {
    res.render('registration')
}
export const regProfile = async (req, res) => {
    const { name, password } = req.body
    const user = await formData.findOne({ name })
    if (user) {
        return res.json({
            message: 'already a user'
        })
    }

    formData.create({
        name, password
    })

    res.redirect('/login')
}