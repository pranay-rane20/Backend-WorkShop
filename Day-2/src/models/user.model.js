const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true
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
    return bcrypt.compare(this.password, password);
}


//genereate token
// verify token


const User = mongoose.model('User', userSchema);
module.exports = User;
