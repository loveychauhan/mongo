import express from 'express'
import appRouter from './route/adminRoute.js'
import connectDb from './config/db.js'
import path from 'path'
import { fileURLToPath } from 'url'
import { dirname } from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

// console.log(__dirname)

const app = express()
app.use(express.static(__dirname))
// app.use(express.static(path.join(__dirname, 'upload')))

app.use(express.urlencoded({ extended: true }))
app.set('view engine', 'ejs')

connectDb()

app.use(appRouter)

app.listen('4000', () => {
    console.log('server running at 4000')
})