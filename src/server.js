const dotenv = require('dotenv');
const fs = require('fs');
const Logger = require("./logger/Logger.js");
const express = require("express");

dotenv.config();

let env =process.env.ENV;

const http = env=="DEV"?require('http'):require('https');
const port= env=="DEV"?8080:443;
const serverProps={
    key: fs.readFileSync('server.key'),
    cert: fs.readFileSync('server.cert')
};

const app = express();
app.use(express.static("public"));
app.use(express.static("shared"));

app.disable('x-powered-by');
var httpServer;
if(env=="DEV"){
 httpServer = http.createServer(app);  
}else{
 httpServer= http.createServer(serverProps ,app);  
}


const afterAppStarted = ()=>{
  Logger.log({level:"info", message: `Example app listening on port ${port}! Go to ${env=="DEV"?"http":"https"}://localhost:${port}/`});
};

Logger.log({level:"info", message:"Create web socket server"});
const io = require("socket.io")(httpServer, {});

const startApp = ()=>{
	httpServer.listen(port, afterAppStarted);
}

io.on("connection", socket =>{
	Logger.log({level:"info", message:`On connection: ${socket.id}`});
});
module.exports = {httpServer: httpServer, app: app,startApp:startApp, wsServer:io};