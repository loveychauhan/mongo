import userData from "../model/userProfile.js"

export const home = (req, res) => {
    let user = ''
    res.render('home', { user })

}
export const regiter = (req, res) => {
    res.render('register')

}
export const login = (req, res) => {
    res.render('login')

}
export const regData = async (req, res) => {
    const { name, password, follower, following } = req.body
    const { originalname } = req.file
    const user = await userData.findOne({ name })
    if (user) {
        return res.json({
            message: 'already an user'
        })
    }

    await userData.create({
        name, password, follower, following, avatar: originalname
    })

    res.redirect('/login')

}
export const logData = async (req, res) => {
    const { name, password } = req.body
    const user = await userData.findOne({ name })
    if (!user) {
        return res.json({
            message: 'Not a valid user'
        })
    }

    const isUser = password === user.password

    if (!isUser) {
        return res.json({
            message: 'Wrong Password'
        })
    }

    res.render('home', { user })
}   
