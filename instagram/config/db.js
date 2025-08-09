import mongoose from "mongoose";

const connectDb = () => {
    try {
        mongoose.connect('mongodb://127.0.0.1:27017/instaProfile')
    } catch (error) {
        console.log(error)
    }
}

export default connectDb