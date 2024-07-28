import * as userController from '@controllers/userController'
import { Router } from 'express'

const router: Router = Router()

router.post('/signup', userController.signupUser)

export default router
