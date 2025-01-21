const express = require('express');
const morgan = require('morgan');
const app = express();
app.use(morgan('dev'));

app.set('view engine', 'ejs');
app.set('views', './src/views');


const userRoutes = require('./routes/user.routes')

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use('/user',userRoutes)

app.get('/login',(req,res)=>{
    res.render('login')
})
app.get('/register', (req, res) => {
    res.render('register');
});

app.get('/', (req, res) => {
    res.render('welcome');
});


module.exports = app;

