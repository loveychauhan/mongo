import express from 'express'
import { getFile, home, login, logProfile, gallery, register, regProfile } from '../controller/admin.js'
import upload from '../multer/multer.js'
import { verifyToken } from '../middleware/verification.js'

const appRouter = express.Router()

appRouter.get('/', home)
appRouter.post('/image', upload.single('avatar'), getFile)
appRouter.get('/login', login)
appRouter.post('/login', logProfile)
appRouter.get('/register', register)
appRouter.post('/register', regProfile)

appRouter.get('/verify', verifyToken, (req, res) => {

})
appRouter.get('/gallery', gallery)



export default appRouter

