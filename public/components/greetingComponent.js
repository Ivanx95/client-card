import i18n from "../i18n.js";
import getHTML from "./greetingComponent-ui.js";
import BaseComponent from "./BaseComponent.js";



export default class GreetingComponent extends BaseComponent {
  constructor(container) {
  	super(container, getHTML);
    this.uiElements = {greetingTitle:{id:"#greeting"}};
  }

  init(){
  	super.init();
	let greetingTitle = this.uiElements.greetingTitle.el;
	
	let cookieStr = document.cookie;
	let cookie = JSON.parse(cookieStr);  
	console.log(i18n.messageEs);
	let greetingMsg = i18n.interpolate(i18n.messageEs[0].value, cookie.user.name);
	greetingTitle.innerHTML = greetingMsg;
  }
  
}

