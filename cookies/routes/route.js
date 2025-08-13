import express from 'express'
import { about, home, login, logProfile, register, regProfile } from '../controllers/admin.js'
import authcookie from '../middleware/authcookies.js'

const appRouter = express.Router()
appRouter.get('/', authcookie, home)
appRouter.get('/login', login)
appRouter.post('/login', logProfile)
appRouter.get('/register', register)
appRouter.post('/register', regProfile)
appRouter.get('/about', authcookie, about)
export default appRouter