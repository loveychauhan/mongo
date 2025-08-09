import express from 'express'
import appRouter from './route/adminRoute.js'
import connectDb from './config/db.js'
import { fileURLToPath } from 'url'
import { dirname } from 'path'

const app = express()
const __fileName = fileURLToPath(import.meta.url)
const __dirName = dirname(__fileName)

app.use(express.static(__dirName))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.set('view engine', 'ejs')
connectDb()
// app.use(fileUpload())
app.use(appRouter)


app.listen(4040, () => {
    console.log('server is running at 4040')
})