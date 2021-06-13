
const dataSource = require("../db/model/DB.js");

const Card= dataSource.models.Card;

const path ="/cards";
const express = require("express");
const apiRouter = express.Router();
const cards = require("../db/cards.js");

const findCardByUUID = (cardId, operatorID)=>{
	return Card.findAll({
			  where: {
			    value: cardId,
			  },
			  include: [{
			    model: dataSource.models.Brand,
			    as: 'brand',
			    required: true,
			    where:{
			    	USER_ID: operatorID
			    }
			  }]   
			});
}

apiRouter.get(path,function(req, res) {
	console.log("Request on get cards");
	Card.findAll({include:'brand'})
	.then((cards)=>{
        res.status(200).send(cards);
    })
});

apiRouter.post(`${path}/:uuid`,function(req, res) {
	let uuid = req.params.uuid;
	console.log(`Request on get request with uuid ${uuid}`);
	let operatorID = req.body.operatorID;

	findCardByUUID(uuid,operatorID)
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

apiRouter.route("/transactions/credit/:cardId")
		.post(function(req, res) {
			console.log("Request of transaction");
			let uuid = req.params.cardId;
			let operatorID = req.body.operatorID;

			console.log(req.body);
			let totalSale = req.body.totalSale;

			calculatePointsToAdd(operatorID,uuid, totalSale)
			.then(({points, noResult})=>{
				if(noResult){
					res.status(405).send({error:"No cards found belonging to this operators"});
				}
				console.log(`Points gained: ${points}`);	

				Card.increment('points', { by: points, where: { value: uuid }})
				.then(()=>{
					console.log(`Card point: ${uuid} aumented by: ${points}`);
					res.status(200).send({points:points});
				});
			})
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
	return findCardByUUID(cardId, operatorID).then((cards)=>{
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
	return findCardByUUID(cardId,operatorID).then((cards)=>{
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

function getBrandOwner(operatorID){
	return operatorID;
}


module.exports = apiRouter;

