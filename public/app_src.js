import requests from "./api/request.js"
import GreetingComponent from "./components/greetingComponent.js"
import CardComponent from "./components/cardFiller.js"
import escape from "./utils/stringUtils.js";
import WebSocketInstance from "./messaging/Socket.js"
import handleError from "./utils/errorHandler.js"
import UserRequest from "./api/UserRequest.js";

const componentsArray = [];

let  cardComponent;

const store = {};



function configureComponents(){
	let greetingContainer = document.querySelector("#greetingComponent-ui");	
	let cardContainer = document.querySelector("#card-column-ui");	
	cardComponent = new CardComponent(cardContainer);
	componentsArray.push(new GreetingComponent(greetingContainer));
	componentsArray.push(cardComponent);

	const socket = WebSocketInstance.getInstance();

	UserRequest.getInfo((data)=>{
	  const currentUserId = data.userId;
	  	socket.on(`send/${currentUserId}`, (arg)=>{
		let card = JSON.parse(arg); 
		console.log(card); 
		let cards = store.cards;
		let index = cards.map((c)=>c.cardId).indexOf(card.cardId);
		cards[index] = card;
		store.cards = cards;
		cardComponent.createCardElement(card);
    	});
	});
	
} 

function app(){
  
  configureComponents(); 

  componentsArray.forEach(el=>{
	console.log(el);
	el.init();
  });

	UserRequest.getInfo((data)=>{

	  const currentUserId = data.userId;
	  const cardHolder = document.getElementById("card-table");
	  requests.getCardsByClient(currentUserId,cards =>{
		  cards.forEach(cardEl=>{
		    let row = document.createElement('div');
		    row.className = ["columns"];
			let row1 = document.createElement('div');
			
			row1.className = ["column"];

			let brandButton = document.createElement('button');
			brandButton.className = ["button is-fullwidth"];
			brandButton.innerHTML = escape(cardEl.brand.name);

			row1.appendChild(brandButton);

			row.appendChild(row1);
			row.cardId = cardEl.cardId;
			row.addEventListener("click",()=>{
			let targetCard= store.cards.find(card=>{
				return card.cardId == row.cardId;
			})
			cardComponent.createCardElement(targetCard);
			});

			cardHolder.appendChild(row);
		});
		store.cards = cards;
	   });
	});

  
}

document.addEventListener('DOMContentLoaded', function() {
	try{
		app();
	}catch(error){
		handleError(error);
	}
 } , false);
   




