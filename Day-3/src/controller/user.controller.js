const userModel = require('../models/user.model')

const {validationResult} = require('express-validator')

module.exports.registerUserController = async(req,res)=>{

    const errors = validationResult(req)

    if(!errors.isEmpty()){
        return res.status(400).json({error:errors.array()})
    }

    try {
        const {username,password,email} = req.body;

        const user = await userService.createUser({
            password,
            email,
            username
        })
        res.send(user);
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
}