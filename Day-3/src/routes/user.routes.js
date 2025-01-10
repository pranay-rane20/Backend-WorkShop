const {Router} = require('express');
const router = Router();
const userController  = require('../controller/user.controller');


router.post('/register', userController.registerUserController);

module.exports = router;