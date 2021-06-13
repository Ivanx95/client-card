const apiRouter = require("./api/cardController.js");
const bodyParser = require('body-parser')
const session = require('express-session');
const cookieParser = require('cookie-parser');

const fs = require('fs');
const https = require('https');


const appName= "Client Card";

const express = require("express");
const app = express();
const port= 443;
console.log("Starting  application");

const dataSource = require("./db/model/DB.js");

const User= dataSource.models.User;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); 
app.use(cookieParser());
app.use(session({secret: "1234"}));

function checkSignIn(req, res,next){
   if(req.session.user){
   	console.log("User authenticated");
    next(req, res);
   } else {
    console.log("User not authenticated");
    res.redirect("/login.html");
   }
}


app.get("/login", (req, res) => {
  res.redirect("/login.html");
});

app.post("/login",(req,res)=>{
   console.log("On login");
   if(!req.body.email || !req.body.password){
      res.redirect("/login.html");
   } else {
      routeByUser(req, res);
   }
});

function routeByUser(req,res){
     console.log("routing"); 
     User.findAll({limit: 1,
      where:{email:req.body.email, password: req.body.password}})
     .then(users=>{
       if(!users){
         res.redirect("/login.html");
         return;
       }

      let user = users[0].dataValues;

      let newUser = {name:user.name, typeOfUser: user.typeOfUser};
      req.session.user = newUser;
      console.log("User logged");
      console.log(user.userId);

      switch(user.typeOfUser){
        case 'CLIENT':
          res.redirect('/index.html');
        break;
        case 'BUSINESS':
          res.redirect('/admin.html');
        break;
      }
    });
}

app.get("/",checkSignIn, (req,res)=>{
  console.log(`Request on / `);
  console.log(req.session.typeOfUser);
  switch(req.session.typeOfUser){
    case 'CLIENT':
      res.redirect('/index.html');
    break;
    case 'BUSINESS':
      res.redirect('/admin.html');
    break;
  }

    
});

app.get("/users", (req, res) => {
  dataSource.models.User.findAll()
    .then((users)=>{
        res.status(200).send(users);
    })
 
});


app.use(express.static("public"));
app.use(apiRouter);


https.createServer({
  key: fs.readFileSync('server.key'),
  cert: fs.readFileSync('server.cert')
}, app)
.listen(port, function () {
  console.log(`Example app listening on port ${port}! Go to https://localhost:3000/`)
})
