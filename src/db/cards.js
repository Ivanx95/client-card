const dataSource = require("./model/DB.js");

const cards = {
	data: [{id:1, brandName:"<h1>Hello</h1>", color: "1", value:"IMgyeryVHV", points:240},
		   {id:2, brandName:"ALPA", color: "2",  value:"8RpnsdqXGN", points:240},
		   {id:1, brandName:"Mi Morena", color: "3", value:"FoBcRdyAaB", points:230}],

	findCardInfo: function (uuid){
		return dataSource.models.Card.findAll({include:'brand'});

		return this.data.find((e)=>{
			let isEqual = e.value ===  uuid
			console.log(isEqual);
			return isEqual;
		});
	},
	getCards:  function(){
		console.log("looking for all cards");
		return dataSource.models.Card.findAll({include:'brand'});
	}
}

module.exports = cards;

