import i18n from "../i18n.js";
import html from "./greetingComponent-ui.html";
import UserRequest from "../api/UserRequest.js";
import BaseComponent from "./base_component/BaseComponent.js";



export default class GreetingComponent extends BaseComponent {
  constructor(container) {
  	super(container, html);
    this.uiElements = {greetingTitle:{id:"#greeting"}};
  }

  init(){
  	super.init();
	let greetingTitle = this.uiElements.greetingTitle.el;
	
	UserRequest.getInfo((data)=>{
		console.log(i18n.messageEs);
		let greetingMsg = i18n.interpolate(i18n.messageEs[0].value, data.name);
		greetingTitle.innerHTML = greetingMsg;
	});
	
  }
  
}

