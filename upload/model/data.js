import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    avatar: String,
})


const data = mongoose.model('data', userSchema)

export default data