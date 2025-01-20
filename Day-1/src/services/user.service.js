const userModel = require('../models/user.model')

module.exports.createUser = async ({username,email,password})=>{
    if(!username || !email || !password){throw new Error("username, email and password are required")};

    const isUserExists = await userModel.findOne({
        $or:[{username},{email}]
    })
    if(isUserExists){
        throw new Error("username or email already exists")
    }

    const hashedpass = await userModel.hashPassword(password);

    const user = await userModel.create({
        username,
        email,
        password:hashedpass
    })
    delete user._doc.password;
    return user;
}