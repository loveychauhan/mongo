import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: String,
    password: String
})

const formData = mongoose.model('formData', userSchema)

export default formData