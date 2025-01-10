const userModel = require('../models/user.model')

module.exports.registerUserController = async(req,res)=>{
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