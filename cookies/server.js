import express from 'express'
import appRouter from './routes/route.js'
import connectDb from './config/connectDb.js'
import cookieParser from 'cookie-parser'

const app = express()
app.set('view engine', 'ejs')
connectDb()
app.use(cookieParser())
app.use(express.urlencoded({ extended: true }))
app.use(appRouter)


app.listen(5300, () => {
    console.log('server is running at 5300')
})