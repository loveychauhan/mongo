import express from 'express'
import appRouter from './route/adminRoute.js'

const app = express()
app.set('view engine', 'ejs')
app.use(appRouter)

app.listen(4000, () => {
    console.log('server is running at 4000')
})