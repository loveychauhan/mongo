import userData from "../model/userData.js"
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
export const home = (req, res) => {
    const { name } = req.user
    res.render('home', { name })
}

const user = {
    name: 'lovey',
    job: 'MERN developer',

}

export const login = (req, res) => {
    req.session.user = user
    res.render('login')
}

export const logProfile = async (req, res) => {
    const { name, password } = req.body
    const user = await userData.findOne({ name })

    if (!user) {
        res.render('login')
        return
    }

    const isMatch = await bcrypt.compare(password, user.password)
    if (isMatch) {
        const token = jwt.sign({ name }, 'lovey')
        res.cookie('token', token)
        return res.redirect('/about')
    } else {
        return res.render('login', { error: 'Wrong password' });
    }

}

export const register = (req, res) => {
    res.render('register')
}

export const regProfile = async (req, res) => {
    const { name, password } = req.body
    const user = await userData.findOne({ name })

    if (user) {
        res.redirect('/register')
        return
    }

    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(password, salt, async (err, hash) => {
            await userData.create({
                name, password: hash
            })
        })
    })

    res.redirect('/login')
}

export const about = (req, res) => {
    const { name } = req.user
    console.log('about', req.session.user)
    res.render('about', { name })
}