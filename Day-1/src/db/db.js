const mongoose = require('mongoose');
const config = require('../config/config');

function connect(){
    return mongoose.connect(config.MONGO_URI)
        .then(() => {
            console.log('Connected to MongoDB');
        })
        .catch((error) => {
            console.error('Error connecting to MongoDB:', error);
            throw error;
        });
}

module.exports = connect ;

