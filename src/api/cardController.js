const Logger = require("../logger/Logger.js");
const dataSource = require("../db/model/DB.js");
const {wsServer} = require("../server.js");
const Card= dataSource.models.Card;

const path ="/cards";
const express = require("express");
const apiRouter = express.Router();


const transformCards = (cards) =>{
	     return  cards.map(c=>{
			let newCard= {};
			newCard.cardId = c.cardId;
			newCard.level = c.level;
			newCard.points = c.points;
			newCard.value = c.value;
			newCard.creditPercentage = c.template.creditPercentage;
			newCard.creditPercentage = c.template.creditPercentage;
			newCard.redemptionPercentage = c.template.redemptionPercentage;
			newCard.brand = c.template.brand
			newCard.OWNER_ID = c.OWNER_ID;
			return newCard;
		});}

const includeUntilBrand = [{
						    model: dataSource.models.CardTemplate,
						    as: 'template',
						    required: true,
						    include: [{
						    	model: dataSource.models.Brand,
					    		 as:'brand',
					    		 required :true
						    	}]
						   }];

const findCardByUUID = (cardId, operatorID)=>{
	return Card.findAll({
			  where: {
			    value: cardId,
			  },
			  include: [
				{
				    model: dataSource.models.CardTemplate,
				    as: 'template',
				    required: true,
				    include: [
				    	{
			    		 model: dataSource.models.Brand,
			    		 as:'brand',
			    		 required :true,
			    		  where:{
					    	USER_ID: operatorID
					    }
				    	}]
				}]}
			);
}

apiRouter.get(`${path}/send/client/:clientId/card`,function(req, res) {
	let clientId = req.params.clientId;
	Logger.log({level: "info", message:`Pinging client ${clientId}`});
	wsServer.emit(`send/${clientId}`, "world");
    res.status(200).send({});
});

apiRouter.get(`${path}/owner/:ownerId`,function(req, res) {
	Logger.log({level: "info", message:"Request on get cards by owner"});
	Card.findAll({ where:{ OWNER_ID: req.params.ownerId },
				   include: includeUntilBrand
				})
	.then((cards)=>{
        return transformCards(cards);
    }).then(cards=> res.status(200).send(cards))	;
});

apiRouter.get(path,function(req, res) {
	console.log("Request on get cards");
	Card.findAll({include: includeUntilBrand})
	.then((cards)=>{
        return transformCards(cards);
    }).then(cards=> res.status(200).send(cards));
});

apiRouter.post(`${path}/:uuid`,function(req, res) {
	let uuid = req.params.uuid;
	console.log(`Request on get request with uuid ${uuid}`);
	let operatorID = req.body.operatorID;

	findCardByUUID(uuid,operatorID)
	.then((cards)=>{
        return transformCards(cards);
    })
	.then((cards)=>{
		console.log(`Cards: ${cards}`);
		if(cards.length != 0){
			let card = cards[0];
			console.log(`Card found:${card}`);
			res.status(200).send({card});
		}else{
			res.status(400).send({message:"No card found belonging to operator"});
		}
	});
});

apiRouter.post("/transactions/credit/:cardId",function(req, res) {
			Logger.log({level:"info",message:"Request of transaction"});
			let uuid = req.params.cardId;
			let operatorID = req.body.operatorID;

			Logger.log({level:"info",message:JSON.stringify(req.body)});
			let totalSale = req.body.totalSale;

			findCardByUUID(uuid, operatorID)
			.then((cards)=> transformCards(cards))
			.then((cards)=>{
				console.log(`Cards: ${cards}`);
				if(cards.length != 0){
					const points=totalSale*cards[0].creditPercentage;
					console.log(`Points gained: ${points}`);	
					const userID = cards[0].OWNER_ID;

					Card.increment('points', { by: points, where: { value: uuid }})
					.then(()=>{
						cards[0].points = cards[0].points + points;
						wsServer.emit(`send/${userID}`, JSON.stringify(cards[0]));

						console.log(`Card point: ${uuid} aumented by: ${points}`);
						res.status(200).send({points:points});
					});
				}else{
					res.status(405).send({error:"No cards found belonging to this operators"});
					return;
				}
			});
		});


apiRouter.route("/transactions/redeem/:cardId/calculate")
		 .post(function(req, res) {
			console.log("Request of calculation");

			let uuid = req.params.cardId;
			let operatorID = req.body.operatorID;

			console.log(req.body);
			calculatePointsToSubstract(operatorID,uuid)
			.then(({money, noResult})=>{
				if(noResult){
					res.status(405).send({error:"No cards found belonging to this operators"});
				}

				console.log(`Money got: ${money}`);

				res.status(200).send({money:money});
			})
		});

apiRouter.route("/transactions/redeem/:cardId")
		 .post(function(req, res) {
			console.log("Request of transaction");

			let uuid = req.params.cardId;
			let operatorID = req.body.operatorID;

			console.log(req.body);
			calculatePointsToSubstract(operatorID,uuid)
			.then(({money, noResult})=>{
				if(noResult){
					res.status(405).send({error:"No cards found belonging to this operators"});
				}

				console.log(`Money got: ${money}`);

				return Card.update({points:0},{where:{value:uuid}})
			})
			.then(()=>{
				res.status(200).send();
			});
		});





function calculatePointsToAdd(operatorID, cardId, saleTotal){
	console.log(`Operatorid: ${operatorID}`);
	return findCardByUUID(cardId, operatorID)
				.then((cards)=> transformCards(cards))
				.then((cards)=>{
					console.log(`Cards: ${cards}`);
					if(cards.length != 0){
						return {points:saleTotal*cards[0].creditPercentage};	
					}else{
						return {noResult:true};
					}
				});
}


function calculatePointsToSubstract(operatorID, cardId){
	console.log(`Operatorid: ${operatorID}`);
	return findCardByUUID(cardId,operatorID)
				.then((cards)=> transformCards(cards))
				.then((cards)=>{
					console.log(`Cards: ${cards}`);
					let card = cards[0];
					if(cards.length != 0){
						console.log(`Cards: ${card.points}`);
						return {money: card.redemptionPercentage * card.points };	
					}else{
						return {noResult:true};
					}
				});
}



module.exports = apiRouter;

