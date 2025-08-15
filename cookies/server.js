import express from 'express'
import appRouter from './routes/route.js'
import connectDb from './config/connectDb.js'
import cookieParser from 'cookie-parser'
import setSession from './config/session.js'

const app = express()
connectDb()
app.use(setSession)
app.set('view engine', 'ejs')
app.use(cookieParser())
app.use(express.urlencoded({ extended: true }))
app.use(appRouter)


app.listen(5300, () => {
    console.log('server is running at 5300')
})