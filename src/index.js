const apiRouter = require("./api/cardController.js");
const bodyParser = require('body-parser')
const session = require('express-session');
const cookieParser = require('cookie-parser');
const dotenv = require('dotenv');
const Logger = require("./logger/Logger.js");

const fs = require('fs');
const https = require('https');

const appName= "Client Card";

const express = require("express");
const app = express();

dotenv.config();

Logger.log({level:"info", message: "Starting application"});

app.set('views', './src/views');
app.set('view engine', 'pug');


const dataSource = require("./db/model/DB.js");

const User= dataSource.models.User;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); 
app.use(cookieParser());
app.use(session({secret: "1234"}));
app.use(express.static("public"));
app.use(apiRouter);


function switchSession(req, res, user){
    Logger.log({
      level: 'info',
      message: `Type of user: ${user.typeOfUser}`
    });
     switch(user.typeOfUser){
        default:
        case 'CLIENT':
          res.redirect('/index');
        break;
        case 'BUSINESS':
          res.redirect('/admin');
        break;
  }
}

app.get("/", (req,res)=>{
  Logger.log({
      level: 'info',
      message: "Request on /"
    });

  if(!req.session.user|| req.session.user == undefined){
    
    Logger.log({
      level: 'info',
      message: "No user session found"
    });

    res.redirect("/login");
    return;
  }
  Logger.log({
      level: 'info',
      message: "User session found"
  });
  
  switchSession(req,res, req.session.user);
});

app.get("/login", (req, res)=>{
  Logger.log({
      level: 'info',
      message: "Request on /login`"
  });
  if(!req.session.user){
    Logger.log({
      level: 'info',
      message: "No user session found"
    });
    res.render('login.pug', {});
    return;
  }
  switchSession(req,res, req.session.user);
});

app.post("/loginuser",(req,res)=>{
  
  Logger.log({
    message: "Searching for user"
  });
   User.findAll({limit: 1,
    where:{email:req.body.email, password: req.body.password}})
   .then(users=>{
     if(!users){
       res.redirect("/login")
       return;
     }

    Logger.log({
      message: "User authenticated agains db"
    });
    let user = users[0].dataValues;

    let newUser = {name:user.name, typeOfUser: user.typeOfUser};
    req.session.user = newUser;

    switchSession(req,res,user);
  });
});


app.get("/index", (req, res)=>{
  res.render('index.pug', {});
})

app.get("/admin", (req, res)=>{
  res.render('admin.pug', {});
})



app.get("/users", (req, res) => {
  dataSource.models.User.findAll()
    .then((users)=>{
        res.status(200).send(users);
    })
 
});


let env =process.env.ENV;
var port= 443;

const afterAppStarted = ()=>{
  Logger.log({level:"info", message: `Example app listening on port ${port}! Go to https://localhost:3000/`});
};

if(env=="DEV"){
  port = 8080;
  app.listen(port, afterAppStarted);
//prod
}else{
  https.createServer({
    key: fs.readFileSync('server.key'),
    cert: fs.readFileSync('server.cert')
  }, app)
  .listen(port, afterAppStarted);
}

