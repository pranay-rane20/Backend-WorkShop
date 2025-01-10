const express = require('express');
const morgan = require('morgan');
const app = express();
app.use(morgan('dev'));

const userRoutes = require('./routes/user.routes')

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use('/users',userRoutes)

module.exports = app;

