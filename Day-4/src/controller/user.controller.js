const userModel = require('../models/user.model')
const userService = require('../services/user.service')
const {validationResult} = require('express-validator')

module.exports.registerUserController = async(req,res)=>{

    const errors = validationResult(req)

    if(!errors.isEmpty()){
        return res.status(400).json({error:errors.array()})
    }

    try {
        const {username,email,password} = req.body;

        const user = await userService.createUser({
            username,
            email,
            password,
        })
        res.status(201).json({
            success: true,
            message: "User registered successfully",
            data: user
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
}