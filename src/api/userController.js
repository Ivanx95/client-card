const Logger = require("../logger/Logger.js");
const dataSource = require("../db/model/DB.js");
const User= dataSource.models.User;

const path ="/users";
const express = require("express");
const userRouter = express.Router();



 userRouter.get(path.concat("/info"),(req,res)=>{
 	let userId = req.session.user.id;
 	User.findOne({where:{ userId: userId }})
	.then((user)=>{
        res.status(200).send(user);
    });

 });

 module.exports = userRouter;