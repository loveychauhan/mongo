import express from 'express'
import appRouter from './route/route.js'

const app = express()

app.use(appRouter)
app.use(express.urlencoded({ extended: true }))
app.set('view engine', "ejs")

app.listen(3000, () => {
    console.log('server is running at 3000')
})