import express from 'express'
import userController from './user.controller'

const router = express.Router()

router.post('/createUser', userController.createUser)

export default router
