import requests from "../api/authRequests.js"
import i18n from "../i18n.js";
import getHTML from "./AuthComponent-ui.js";
import BaseComponent from "./BaseComponent.js";

export default class CardActionsComponent extends BaseComponent{

  constructor(container) {
  	super(container, getHTML);
    this.uiElements = {
    	loginBtn:{id:"#loginBtn"},
    	passwordInput: {id:"#passwordInput"},
    	emailInput: {id:"#emailInput"},
    };
  }

  init(){
  	super.init();
  	let loginBtn = this.uiElements.loginBtn.el;

    loginBtn.addEventListener('click', ()=>{
      loginBtn.className = "button is-link is-loading";
      	let body = JSON.stringify({email: emailInput.value, password: passwordInput.value});
      	requests.login(body, (res)=>{
      		if(res.ok){
				window.location.replace("/");
      		}
		
      	});
    });
  }
}