import express from 'express'
import { home } from '../controller/admin.js'

const appRouter = express.Router()

appRouter.get('/', home)

export default appRouter