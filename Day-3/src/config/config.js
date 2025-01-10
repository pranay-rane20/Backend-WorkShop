require('dotenv').config();

const _config = {
    //atlas
    MONGODB_URI : process.env.MONGODB_URI,
    //local
    MONGO_URI : process.env.MONGO_URI,
    PORT : process.env.PORT,
} 

const config = Object.freeze(_config);

module.exports = config;