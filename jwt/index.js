import express from 'express'
import appRouter from './route/route.js'
import connectDB from './config/db.js'

const app = express()

app.set('view engine', "ejs")
app.use(express.urlencoded({ extended: true }))

connectDB()

app.use(appRouter)

app.listen(3000, () => {
    console.log('server is running at 3000')
})