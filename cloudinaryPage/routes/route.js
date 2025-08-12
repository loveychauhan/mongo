import express from 'express'
import { home, imageUpload, login, logProfile, register, regProfile } from '../controller/admin.js'
import upload from '../config/multer.js'

const appRoute = express.Router()
appRoute.get('/', home)
appRoute.post('/home', upload.single('avatar'), imageUpload)
appRoute.get('/login', login)
appRoute.post('/login', logProfile)
appRoute.get('/register', register)
appRoute.post('/register', regProfile)
export default appRoute

