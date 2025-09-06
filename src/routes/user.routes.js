const express = require('express')
const router = express.Router()
const userController = require('../controllers/user.controller')

router.post('/register',userController.registerController)
router.post('/login',userController.loginController)
router.post('/profile',userController
    .profileController
)
module.exports = router