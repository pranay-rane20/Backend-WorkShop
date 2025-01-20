const {Router} = require('express');
const router = Router();
const userController  = require('../controller/user.controller');

const {body } = require('express-validator')




router.post('/register',
    body("username").isString().withMessage("username must be a string")
    .isLength({min:3}).withMessage('username must be greater than 3 char'),
    body("email").isEmail().withMessage("Please provide a valid email"),
    userController.registerUserController);

module.exports = router;