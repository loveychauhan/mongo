import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: String,
    password: String
})


const userData = mongoose.model('userData', userSchema)

export default userData