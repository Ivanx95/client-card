const dotenv = require('dotenv');
const fs = require('fs');
const Logger = require("./logger/Logger.js");
const express = require("express");

dotenv.config();

let env =process.env.ENV;
let stripekey =process.env.STRIPE_KEY;

const stripe = require('stripe')(stripekey);

const http = env=="DEV"?require('http'):require('https');
const port= env=="DEV"?8080:443;
const serverProps={
	key: fs.readFileSync('mycard.host/private.key'),
	cert: fs.readFileSync('mycard.host/certificate.crt'),
	ca: [
		fs.readFileSync('mycard.host/ca_bundle.crt')
	]
};

const app = express();
app.use(express.static("public"));
app.use(express.static("free_money"));
app.use(express.static("audio_visualizer"));
app.use(express.static("shared",{maxAge: '20000'}));

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
module.exports = {httpServer: httpServer, app: app,startApp:startApp, wsServer:io, stripe:stripe};
