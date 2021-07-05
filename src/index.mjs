import Logger from "./logger/Logger.js";
import apiRouter from "./api/cardController.js" ;
import  authRouter from "./api/auth.mjs";
import bodyParser  from 'body-parser';
import session  from 'express-session';
import cookieParser  from 'cookie-parser';
import {httpServer, app, startApp}  from "./server.js";
import express  from "express";
import dataSource from "./db/model/DB.js";

Logger.log({level:"info", message: "Starting application"});

app.set('views', './src/views');
app.set('view engine', 'pug');

const User= dataSource.models.User;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); 
app.use(cookieParser());
app.use(session({secret: "1234"}));

app.use("/api", apiRouter);
app.use("/auth", authRouter);



app.get("/signin",(req,res)=>{
 if(req.session.user){
    switchSession(req,res, req.session.user);
    return;
  }
  res.render('signin.pug', {});
});

app.get("/login", (req, res)=>{
  if(req.session.user){
    switchSession(req,res, req.session.user);
    return;
  }
  res.render('login.pug', {});
});


app.get("/admin", (req, res)=>{
  res.render('admin.pug', {title:"Point card"});
})


app.get("/logout", (req, res)=>{
  if(!req.session){
    res.redirect("/");
    return;
  }
  req.session.destroy(function(err) {
    if(err){
       Logger.log({
        level:"error",
        message: "Error happended destroying the session"
      });
      Logger.log({
        level:"error",
        message: err
      });
    }
  });
  
  res.redirect("/");
});


app.get("/users", (req, res) => {
  dataSource.models.User.findAll()
    .then((users)=>{
        res.status(200).send(users);
    })
 
});


app.use((req,res, next)=>{

  Logger.log({level:"info", message: `Request on ${req.originalUrl}`});

  if(req.originalUrl.startsWith("/api")||req.originalUrl.startsWith("/auth")){
    return;
  }
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
  
  next();
});


app.get("/", (req,res)=>{
  switchSession(req,res, req.session.user);
});


app.get("/index", (req, res)=>{
  res.render('index.pug', {title:"Point Card"});
})



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


startApp();


