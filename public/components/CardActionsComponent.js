import GreetingComponent from "./greetingComponent.js"
import html from "./CardActionsComponent-ui.html";
import BaseComponent from "./base_component/BaseComponent.js";

export default class CardActionsComponent extends BaseComponent{

  constructor({container, callBack}) {
  	super(container, html);
    this.uiElements = {
    	creditBtn:{id:"#creditAction"},
    	redemBtn: {id:"#redemAction"}
    };
    this.creditBtn = null;
    this.callBack = callBack;
    
  }
  init(){
    let greetingContainer = this.container.querySelector("#greetingComponent-ui");  
    this.greetingComponent =new GreetingComponent(greetingContainer)
  	super.init();
    this.greetingComponent.init();
  	this.creditBtn = this.uiElements.creditBtn.el;

    this.creditBtn.addEventListener('click', ()=>{
      this.callBack('f');
    });

    this.uiElements.redemBtn.el.addEventListener('click', ()=>{
      this.callBack('rS');
    });
   
  }

  getCreditBtn(){
  	return this.creditBtn;
  }
}