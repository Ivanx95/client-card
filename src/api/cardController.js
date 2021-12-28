const Logger = require("../logger/Logger.js");
const dataSource = require("../db/model/DB.js");
const {wsServer} = require("../server.js");
const Sequelize = require("sequelize");

const Card= dataSource.models.Card;
const User= dataSource.models.User;

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

const findCardByUUIDAndOwner = (cardId, ownerId)=>{
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
				    		USER_ID: ownerId
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


apiRouter.put(`${path}/clients/brand/:brandId/disable`,function(req, res) {
	let cardId = req.body.cardId;
	let brandId = req.params.brandId;
	let logMessage = `Params, cardId: ${cardId}, brandId: ${brandId}`;
	Logger.log({level:"info",message:logMessage});
	Card.findOne({
			  where: {
			    cardId: cardId,
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
				    		brandId: brandId
				    	}
				    }]
				}]})
	.then(Card=>{
		Card.enable=false;
		Card.save();
		Logger.log({level:"info",message:"Card disable successfully"});
		res.status(200).send({});	
	});
});

apiRouter.get(`${path}/clients/brand/:brandId`,function(req, res) {
	
	let brandId = req.params.brandId;
	let limit =  req.query.limit;
	let offset =  req.query.offset;

	Logger.log({level:"info",message:"Request on get clients by brand"});


	dataSource.query(`Select 
					  	CARD.CARD_ID as cardId, USR.NAME,
					  	CARD.POINTS AS points,
					  	CARD.ENABLE AS enable
					  from USR 
					  inner join CARD 
					  	on CARD.OWNER_ID = USR.USER_ID
					  INNER JOIN CARD_TEMPLATE 
					  	on CARD.CARD_TEMPLATE_ID = CARD_TEMPLATE.CARD_TEMPLATE_ID
				  	  INNER JOIN BRAND
					  	on BRAND.BRAND_ID = CARD_TEMPLATE.BRAND_ID
			  		  WHERE BRAND.BRAND_ID = :brandId
			  		  GROUP BY CARD.CARD_ID, USR.NAME, CARD.POINTS, CARD.ENABLE 
			  		  ${limit? "LIMIT  "+limit: ""}
			  		  ${offset? "OFFSET "+offset: ""}
					  `,
	  {model: User,
	   mapToModel: true,
	   type: dataSource.QueryTypes.SELECT,
	   replacements: { brandId: brandId} 
	  })
	  .then(users=>{
				dataSource.query(`Select count(CARD.CARD_ID) as total 
									from USR inner join CARD on CARD.OWNER_ID = USR.USER_ID 
									INNER JOIN CARD_TEMPLATE on CARD.CARD_TEMPLATE_ID = CARD_TEMPLATE.CARD_TEMPLATE_ID 
									INNER JOIN BRAND on BRAND.BRAND_ID = CARD_TEMPLATE.BRAND_ID  
			  		  				WHERE BRAND.BRAND_ID = :brandId`,
						  {type: dataSource.QueryTypes.SELECT,
						   replacements: { brandId: brandId} 
						  })
			  			.then(total => {
			  				let totalOfQuery = total[0].total;
							let paginationResponse = {total:totalOfQuery, hits: users};
			  				res.status(200).send(paginationResponse);
			  			});
	  });
});

apiRouter.post(`${path}/:uuid`,function(req, res) {
	let uuid = req.params.uuid;
	console.log(`Request on get request with uuid ${uuid}`);
	let operatorID = req.body.operatorID;

	findCardByUUIDAndOwner(uuid,operatorID)
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
			let ownerId = req.body.ownerId;

			Logger.log({level:"info",message:JSON.stringify(req.body)});
			let totalSale = req.body.totalSale;

			findCardByUUIDAndOwner(uuid, ownerId)
			.then((cards)=> transformCards(cards))
			.then((cards)=>{
				
				if(cards.length != 0){
					const points=totalSale*cards[0].creditPercentage;
					
					Logger.log({level:"info",
								message:`Points gained: ${points}`});
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

			Logger.log({level:"info",
						message:"Request of calculation"});

			let uuid = req.params.cardId;
			let ownerId = req.body.ownerId;

			console.log(req.body);
			calculatePointsToSubstract(ownerId,uuid)
			.then(({money, noResult})=>{
				if(noResult){
					res.status(405).send({error:"No cards found belonging to this operators"});
				}

				
				Logger.log({level: "info", message: `Money got: ${money}`})
				res.status(200).send({total:money});
			})
		});

apiRouter.route("/transactions/redeem/:cardId")
		 .post(function(req, res) {
			

			Logger.log({level:"info",
						message:"Request of redemption"});

			let uuid = req.params.cardId;
			let ownerId = req.body.ownerId;

			
			calculatePointsToSubstract(ownerId,uuid)
			.then(({money, noResult,card})=>{
				
				if(noResult){
					res.status(405).send({error:"No cards found belonging to this operators"});
				}

				Logger.log({level:"info",
						message:`Money redemmed: ${money}`});

			 	Card.update({points:0},{where:{value:uuid}})
			 	.then(()=>{
			 		const userID = card.OWNER_ID;
					card.points = 0;
					Logger.log({level:"info",
								message:`Sending update to ${userID} of card ${JSON.stringify(card)}`});
			 		wsServer.emit(`send/${userID}`, JSON.stringify(card));
					res.status(200).send();
				});
			});
			
		});





function calculatePointsToAdd(operatorID, cardId, saleTotal){
	console.log(`Operatorid: ${operatorID}`);
	return findCardByUUIDAndOwner(cardId, operatorID)
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
	return findCardByUUIDAndOwner(cardId,operatorID)
				.then((cards)=> transformCards(cards))
				.then((cards)=>{
					console.log(`Cards: ${cards}`);
					let card = cards[0];
					if(cards.length != 0){
						console.log(`Cards: ${card.points}`);
						return {money: card.redemptionPercentage * card.points, card:cards[0] };	
					}else{
						return {noResult:true};
					}
				});
}



module.exports = apiRouter;

