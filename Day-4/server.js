const app = require('./src/app');
const http = require('http')
const config = require('./src/config/config');
const connect = require('./src/db/db');
connect();

const server = http.createServer(app)
const io = require('socket.io')(server);

io.use((socket,next)=>{

    const token = socket.handshake.auth.token
    console.log("socket.io middleware")
    return next();
})

io.on('connection', socket => {

    socket.on('hello', (message) => {
        // io.emit('message', message);
        console.log(message)
        socket.emit("server-hello","hello from server")

    });
    console.log('new user connected')

});


server.listen(config.PORT,()=>{
    console.log(`server is running on port ${config.PORT}`)
})
