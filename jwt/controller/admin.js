export const home = (req, res) => {
    res.render('home')
}
export const login = (req, res) => {
    res.render('login')
}
export const logProfile = (req, res) => {
    const { name, password } = req.body
    console.log(name)

}
export const register = (req, res) => {
    res.render('register')
}
export const regProfile = (req, res) => {
    console.log(req.body )
}