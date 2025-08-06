import jwt from "jsonwebtoken"
export const verifyToken = async (req, res, next) => {
    let token = req.headers.authorization
    console.log("token : ", token)
    if (token == "notoken") {
        console.log("nullllllll")
    }
    console.log("token : ", token)
    const isVerified = await jwt.verify(token, "lovey")
    if (!isVerified) {
        return res.json({
            message: "Failed"
        })
    }
    next();
}