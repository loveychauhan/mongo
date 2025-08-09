import express from 'express'
import appRouter from './route/adminRoute.js'
import connectDb from './config/db.js'

const app = express()
app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: true }))
connectDb()
app.use(appRouter)

app.listen(4000, () => {
    console.log('server is running at 4000')
})