import requests from "./api/request.js"
import GreetingComponent from "./components/greetingComponent.js"
import CardComponent from "./components/cardFiller.js"
import tester from "./components/adBlockTester.js"
import escape from "./utils/stringUtils.js";


const componentsArray = [];
let  cardComponent;

function handleError(error){
	let errorContainer = document.createElement("div");

	let errorBanner = document.createElement("p");;
	errorBanner.innerHTML ="Something went wrong";
	errorBanner.className = ["danger"];

	let errorMsg = document.createElement("p");
	errorMsg.innerHTML = error;
	
	errorContainer.appendChild(errorBanner);
	errorContainer.appendChild(errorMsg);

	document.getElementsByTagName("body")[0].appendChild(errorContainer);

}

function configureComponents(){
	let greetingContainer = document.querySelector("#greetingComponent-ui");	
	let cardContainer = document.querySelector("#card-column-ui");	
	cardComponent = new CardComponent(cardContainer);
	componentsArray.push(new GreetingComponent(greetingContainer));
	componentsArray.push(cardComponent);

} 

function app(){
  document.cookie = '{"user":{"name":"Ivan"}}';
  console.log(document.cookie);
  configureComponents(); 

  componentsArray.forEach(el=>{
	console.log(el);
	el.init();
  });

  const cardHolder = document.getElementById("card-table");

	
  requests.getCards(cards =>
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
		row.addEventListener("click",(event)=>{
			cardComponent.createCardElement(cardEl);
		});

		cardHolder.appendChild(row);
   }));
}

document.addEventListener('DOMContentLoaded', function() {
	try{
		app();
	}catch(error){
		handleError(error);
	}
 } , false);
   




