const Logger = require("../logger/Logger.js");
const dataSource = require("../db/model/DB.js");

const Brand= dataSource.models.Brand;


const path ="/brands";
const express = require("express");
const apiRouter = express.Router();

apiRouter.get(path,function(req, res) {
	let loggedUser = req.session.user;

	Logger.log({level:"info", 
				message:`looking brands for user ${loggedUser.id}`})

	Brand.findAll({where:{ userId: loggedUser.id }})
	.then((brands)=>{
        res.status(200).send(brands);
    });
});

module.exports = apiRouter;