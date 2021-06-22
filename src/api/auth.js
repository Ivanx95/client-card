const Logger = require("../logger/Logger.js");
const express = require("express");
const dataSource = require("../db/model/DB.js");
const User= dataSource.models.User;

const authRouter = express.Router();


authRouter.post("/loginuser",(req,res)=>{
  
  Logger.log({
    level:"info",
    message: `Searching for user ${req.body.email}`
  });
  Logger.log({
    level:"info",
    message: `Searching for user ${JSON.stringify(req.body)}`
  });
  let errors = {};

  if(!req.body.email){
    errors.emailError = true;
    errors.emailErrorMessage ="Ingrese su usuario";
  }

 if(!req.body.password){
    errors.passwordError = true;
    errors.epasswordErrorMessage ="Ingrese su contraseña";
  }

  if(errors.passwordError || errors.emailError){
     res.status(400).send(errors);
     return;
  }

   User.findAll({limit: 1,
    where:{email:req.body.email, password: req.body.password}})
   .then(users=>{
     if(!users|| users.length <1){
       Logger.log({
        level:"info",
        message: "No user found"
      });
       errors.notUserFound = true;
       res.status(401).send(errors);
       return;
     }

    Logger.log({
      level:"info",
      message: "User authenticated agains db"
    });
    
    let user = users[0].dataValues;

    Logger.log({
      level:"info",
      message: JSON.stringify(user)
    });
    let newUser = {name:user.name, typeOfUser: user.typeOfUser};
    req.session.user = newUser;
    res.status(200).send({});
  });
});




module.exports = authRouter;

