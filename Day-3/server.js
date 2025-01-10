const app = require('./src/app');
const http = require('http')
const config = require('./src/config/config');
const connect = require('./src/db/db');
connect();

const server = http.createServer(app)


server.listen(config.PORT,()=>{
    console.log("server is running on port 3000")
})
