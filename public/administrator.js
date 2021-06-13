
import i18n from "./i18n.js";
import GreetingComponent from "./components/greetingComponent.js"
import RouterComponent from "./components/RouterComponent.js"

let uuidCard;

const componentsArray = [];
let cardActionsComp ;
let action;

document.cookie = '{"user":{"name":"Ivan"}}';

function configureComponents(){

  let greetingContainer = document.querySelector("#greetingComponent-ui");  
  let mainModule = document.querySelector("#mainModule-ui");  


  componentsArray.push(new GreetingComponent(greetingContainer));
  componentsArray.push(new RouterComponent(mainModule));

  componentsArray.forEach(el=>{
    console.log(el);
    el.init();
  });
  
  //cardActionsComp.getCreditBtn().addEventListener('click',()=>{
    /*requests.credit(2,uuidCard,20,()=>{
        console.log("Credit gave it successfully");
        alert("Credit gave it successfully");
    });
  });*/

  
} 


configureComponents();
