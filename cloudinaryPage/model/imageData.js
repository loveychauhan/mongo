import mongoose from "mongoose";

const imageSchema = new mongoose.Schema({
    url: String,
    path: String
})

const imageData = mongoose.model('imageData', imageSchema)

export default imageData