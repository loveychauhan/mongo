import jwt from 'jsonwebtoken'

const authcookie = (req, res, next) => {
    const cookies = req.cookies.token

    if (!cookies) {
        return res.status(401).send('you are not authorized for this page')
    }

    try {
        const decoded = jwt.verify(cookies, 'lovey')
        req.user = decoded
        next()
    } catch (err) {
        return res.status(403).json({ message: 'Invalid user' });
    }

}

export default authcookie

