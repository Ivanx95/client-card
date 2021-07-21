import GreetingComponent from "./greetingComponent.js"
import getHTML from "./CardActionsComponent-ui.js";
import BaseComponent from "./base_component/BaseComponent.js";

export default class CardActionsComponent extends BaseComponent{

  constructor({container, callBack}) {
  	super(container, getHTML);
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
  }

  getCreditBtn(){
  	return this.creditBtn;
  }
}