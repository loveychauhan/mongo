import express from "express";
import appRoute from "./route/adminRoute.js";
import cloudinary1 from "./config/cloudinary.js";
import dotenv from "dotenv";

const app = express()
dotenv.config()

app.use(appRoute)
cloudinary1();
const port = 5000
app.listen(port, () => {
    console.log(`running at ${port}`)
})

