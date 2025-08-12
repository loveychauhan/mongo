import express from 'express'
import { home, image } from '../controller/admin.js'
import upload from '../config/multer.js'

const appRoute = express.Router()

console.log(upload)

appRoute.get('/', home)
appRoute.post('/home', upload.single('avatar'), image)

export default appRoute