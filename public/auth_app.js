// import handleError from "./utils/errorHandler.js"
import AuthComponent from "./components/AuthComponent.js"


function app(){
		configureComponents();
}


function configureComponents(){
	let authComponentContainer = document.querySelector("#mainModule-ui");	
	let componentsArray = [];
	componentsArray.push(new AuthComponent(authComponentContainer));
	 componentsArray.forEach(el=>{
	    console.log(el);
	    el.init();
	  });
} 

document.addEventListener('DOMContentLoaded', function() {
		app();
	
 } , false);
   