import { v2 as cloudinary } from 'cloudinary'
import imageData from '../model/imageData.js'
import userData from '../model/userdata.js'

export const home = (req, res) => {
    res.render('home', { data: [] })

}

export const imageUpload = async (req, res) => {
    const path = req.file.path

    const user = await imageData.find({ path })
    if (user.length === 0) {

        const response = await cloudinary.uploader.upload(path).catch((error) => {
            console.log(error)
        })

        const url = response.secure_url

        await imageData.create({
            url, path
        })
    }

    const data = await imageData.find({})
    console.log(data)
    res.render('home', { data })

}

export const login = (req, res) => {
    res.render('login')
}


export const logProfile = async (req, res) => {
    const { name, password } = req.body
    const user = await userData.findOne({ name })

    if (!user) {
        console.log('not a registered user -- ->', name)
        res.redirect('/register')
        return
    }

    const isAuth = password === user.password

    if (isAuth) {
        res.redirect('/')
        return
    } else {
        return res.json({
            message: 'wrong password'
        })
    }



}

export const register = (req, res) => {
    res.render('register')
}

export const regProfile = async (req, res) => {
    const { name, password } = req.body
    if (!name && !password) {
        res.redirect('/register')
        return
    };

    const user = await userData.findOne({ name })
    if (user) {
        console.log('user is already registered', user.name)
        return
    }

    await userData.create({
        name, password
    })

    console.log('user Registered Successfully')
}