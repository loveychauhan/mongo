import express from 'express'
import { home, logData, login, regData, regiter } from '../controller/admin.js'
import upload from '../config/multer.js'

const appRouter = express.Router()

appRouter.get('/', home)
appRouter.get('/register', regiter)
appRouter.post('/register', upload.single('avatar'), regData)
appRouter.get('/login', login)
appRouter.post('/login', logData)


export default appRouter