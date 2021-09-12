
import RouterComponent from "./components/RouterComponent.js"


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
