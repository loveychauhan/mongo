import express from 'express'
import { home, login, about, logProfile, register, regProfile } from '../controller/admin.js'

const appRouter = express.Router()

appRouter.get('/', home)
appRouter.get('/login', login)
appRouter.post('/login', logProfile)
appRouter.get('/register', register)
appRouter.post('/profile', regProfile)
// appRouter.get('/about', about)


export default appRouter