import express from "express";
import appRoute from "./route/adminRoute.js";
import cloudinary1 from "./config/cloudinary.js";
import dotenv from "dotenv";

const app = express()
dotenv.config()

app.use(appRoute)
cloudinary1();
const port = process.env.port || 5000
app.listen(process.env.port, () => {
    console.log(`running at ${port}`)
})

