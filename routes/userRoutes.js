
import express from 'express'
import UserController from './../controllers/userController.js'
import checkuserAuth from '../middlewares/auth_middlewares.js'
import validator from '../middlewares/validotor.js'

const router = express.Router()

router.use('/changepassword', checkuserAuth)
router.use('/login', validator)
router.use('/logged', checkuserAuth)



// public 

router.post('/registration', UserController.userRegistration)
router.post('/login',UserController.userLogin)
router.post('/reset-pass-email',UserController.sendUserPasswordEmail)
router.patch('/reset-pass/:id/:token',UserController.userPasswordReset)  




// private
router.post("/changepassword", UserController.changeUserPassword)   
router.get('/logged', UserController.loggedUser)

export default router