
import RouterComponent from "./components/RouterComponent.js"
import {SELECTED_BRAND} from "../shared/constants/constants.js"

const componentsArray = [];



function configureComponents(){



	let mainModule = document.querySelector("#mainModule-ui");  

  //componentsArray.push(new GreetingComponent(greetingContainer));
  componentsArray.push(new RouterComponent(mainModule));

  componentsArray.forEach(el=>{
  	console.log(el);
  	el.init();
  });
  
} 
configureComponents();

let myStorage = window.localStorage;
let selectedCompanyStr = myStorage.getItem(SELECTED_BRAND);
let navbarTitle = document.querySelector("#navbarTitle");
const selectBrand = (company)=>{
		navbarTitle.innerHTML = `${oldNavBarTitle}  |  ${company.name}`;
}
document.addEventListener(SELECTED_BRAND,
	(e)=>{
		selectBrand(e.company)
	}, false);
let oldNavBarTitle = "My points";


if(selectedCompanyStr){

	
	let selectedCompany = JSON.parse(selectedCompanyStr);
	selectBrand(selectedCompany);
}

