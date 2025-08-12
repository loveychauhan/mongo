import express from 'express'
import appRoute from './routes/route.js'
import cloudinaryUpload from './config/cloudinary.js'
import connectDB from './config/db.js'

const app = express()
cloudinaryUpload()
connectDB()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.set('view engine', 'ejs')
app.use(appRoute)

app.listen(5001, () => {
    console.log('server is running at 5001')
})