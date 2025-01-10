const userModel = require('../models/user.model')

module.exports.registerUserController = async(req,res)=>{
    console.log(req.body)

    res.send(" register user controller")
}