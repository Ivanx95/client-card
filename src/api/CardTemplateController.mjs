import Logger  from "../logger/Logger.js";
import dataSource from "../db/model/DB.js";

const CardTemplate = dataSource.models.CardTemplate;

import  _validate from "../../shared/ValidationUtils.mjs";
import CardTemplatePercents from "../../shared/TemplateCardConstrains.mjs";

const path ="/card-template";
import  express from "express";

const apiRouter = express.Router();

/**
 * [getCardTemplates description]
 * @param  {[Express.request]} req [description]
 * @param  {[Express.request]} res [description]
 * @return {[CardTemplates]}     [description]
 */
 function getCardTemplates (req, res) {

 	let brandId = req.params.brandId;

 	Logger.log({level:"info", 
 		message:`looking Template Card for brand ${brandId}`})

 	CardTemplate.findAll({
 		include: [
 		{
 			model: dataSource.models.Brand,
 			as:'brand',
 			required :true,
 			where:{
 				brandId: brandId
 			}
 		}]
 	}).then((cardTemplates)=>{
 		res.status(200).send(cardTemplates);
 	});
 }

 apiRouter.get(path.concat("/:brandId"),getCardTemplates);

 apiRouter.patch(path.concat("/:cardTemplateId"),(req, res)=>{
 	let cardTemplateIn =  req.body;
 	let errors =_validate(cardTemplateIn)
 	(CardTemplatePercents.creditPercentage)
 	(CardTemplatePercents.redemptionPercentage,1);

 	if(errors.length){
 		res.status(400).send(errors);
 		return;
 	}

 	let newCredit = Number(cardTemplateIn.creditPercentage/100);
 	let newRedention = Number(cardTemplateIn.redemptionPercentage/100);


 	Logger.log({level:"info", 
 		message:`new Credit ${newCredit} new redention ${newRedention}`});

 	CardTemplate.findByPk(req.params.cardTemplateId)
 	.error((error)=>{
 		Logger.log({level:"error", 
 			message:error})

 		res.status(500).send({error});
 	})
 	.then(function (cardTemplate) {
	    // Check if record exists in db
	    if (cardTemplate) {
	    	Logger.log({level:"info", 
	    		message:"Card template succesfully updated"});

	    	return cardTemplate.update({
	    		creditPercentage: newCredit,
	    		redemptionPercentage: newRedention
	    	})
	    }else{
	    	res.status(400).send({"error": `CardTemplate ${req.params.cardTemplateId} not found`});
	    }
	})
 	.then(()=>{
 		res.status(200).send({});
 	});
 });


 export default apiRouter;