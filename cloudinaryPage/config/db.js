import mongoose from "mongoose";


const connectDB = () => {
    try {
        mongoose.connect('mongodb://127.0.0.1:27017/cloudinaryImage');
    } catch (error) {
        console.log(error)
    }
}
export default connectDB