import Logger from "../logger/Logger.js";  
import express from "express";
import dataSource from "../db/model/DB.js";
import  _validate from "../../shared/ValidationUtils.mjs";
import UserConstrains from "../../shared/UserConstrains.mjs";
const User= dataSource.models.User;

const authRouter = express.Router();



authRouter.post("/signup",(req,res)=>{
  const user = req.body;
  Logger.log({
    level:"info",
    message: `Saving user ${JSON.stringify(user)}`
  });
 
 let errors =_validate(user)
                      (UserConstrains.email)
                      (UserConstrains.password)
                      (UserConstrains.name)
                      (UserConstrains.typeOfUser,1);

 Logger.log({
    level:"debug",
    message: `Erros found ${JSON.stringify(errors)}`
  });
 if(errors.length > 0){
     res.status(400).send(errors);
     return;
  }


 User.create(user).then((savedUser)=>{
    savedUser = savedUser.dataValues;

    Logger.log({
      level:"info",
      message: JSON.stringify(user)
    });
    let newUser = {name:savedUser.name, typeOfUser: savedUser.typeOfUser};
    req.session.user = newUser;
    res.status(200).send({});
  });
 });


authRouter.post("/loginuser",(req,res)=>{
  
  const user = req.body;

  Logger.log({
    level:"info",
    message: `Finding user ${user.email}`
  });
 
let errors =_validate(user)
                      (UserConstrains.email)
                      (UserConstrains.password,1)
                      
 if(errors.length > 1){
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


export default authRouter;

