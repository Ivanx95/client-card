const dotenv = require('dotenv');
const fs = require('fs');
const Logger = require("./logger/Logger.js");

dotenv.config();

let env =process.env.ENV;

const http = env=="DEV"?require('http'):require('https');
const port= env=="DEV"?8080:443;
const serverProps={
    key: fs.readFileSync('server.key'),
    cert: fs.readFileSync('server.cert')
};

const app = express();
var httpServer;
if(env=="DEV"){
 httpServer = http.createServer(app);  
}else{
 httpServer= http.createServer(serverProps ,app);  
}

const io = require("socket.io")(httpServer, {
  Logger.log({level:"info", message:"Create web socket server"});
});

