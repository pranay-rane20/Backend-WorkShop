const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true,
        select:false
    }
}, {
    timestamps: true
});

// userSchema.statics

// userSchema.methods


//generate hashpassword
userSchema.statics.hashPassword = async (password)=>{
    const salt = await bcrypt.genSalt(10);

    return bcrypt.hash(password,salt);
}


//compare password
userSchema.methods.comparePassword = async function(password) {
    if(!password){
        throw new Error("password is required for hashing")
    }
    return bcrypt.compare(this.password, password);
}


//generate token
userSchema.methods.generateToken = async function() {
    const user = this;
    const token = jwt.sign({ _id: user._id.toString() }, process.env.JWT_SECRET);
    return token;
}


// verify token
userSchema.statics.verifyToken = async function(token) {
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = await this.findOne({ _id: decoded._id });
        if (!user) {
            throw new Error('User not found');
        }
        return user;
    } catch (error) {
        throw new Error('Invalid token');
    }
}


const User = mongoose.model('User', userSchema);
module.exports = User;
