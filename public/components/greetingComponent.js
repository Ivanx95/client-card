import i18n from "../i18n.js";
import i18next from 'i18next';

import html from "./greetingComponent-ui.html";
import UserRequest from "../api/UserRequest.js";
//import i18n from "../../shared/i18n.js";
import BaseComponent from "./base_component/BaseComponent.js";



export default class GreetingComponent extends BaseComponent {
  constructor(container) {
  	super(container, html);
    this.uiElements = {greetingTitle:{id:"#greeting"}};
    this.idStorage = window.localStorage;
  }

  init(){
  	super.init();
	let greetingTitle = this.uiElements.greetingTitle.el;
	
	UserRequest.getInfo((data)=>{
		console.log(i18n.messageEs);
		
		let greetingMsg = i18next.t('greeting', {user:data.name});	
		greetingTitle.innerHTML = greetingMsg;
		this.idStorage.setItem("userId",data.userId);
		
	});
	
  }
  
}

