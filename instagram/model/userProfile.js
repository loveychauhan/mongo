import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: String,
    password: String,
    follower: String,
    following: String,
    avatar: String

})

const userData = mongoose.model('userData', userSchema)

export default userData