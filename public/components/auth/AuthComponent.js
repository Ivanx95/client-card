import requests from "../../api/authRequests.js"
import html from "./AuthComponent-ui.html";
import BaseComponent from "../base_component/BaseComponent.js";

export default class CardActionsComponent extends BaseComponent{

  constructor(container) {
  	super(container, html);
    this.uiElements = {
    	loginBtn:{id:"#loginBtn"},
    	passwordInput: {id:"#passwordInput", isPasswordInput:true},
    	emailInput: {id:"#emailInput"},
    };
    super.addForm("formAction",this.uiElements.loginBtn);
    super.addForm("formInput",this.uiElements.emailInput);
    super.addForm("formInput",this.uiElements.passwordInput);
  }

  init(){
  	super.init();
  	let loginBtn = this.uiElements.loginBtn;
    
    loginBtn.el.addEventListener('click', ()=>{
        loginBtn.load(true);
        super.block("formInput");
        super.block("formAction",loginBtn);
      	let formObject = super.getValues("formInput");
        let body = JSON.stringify(formObject);
      	requests.login(body, (res)=>{
      		if(res.ok){
				    window.location.replace("/");
            return;
      		}
          super.unblock("formAction",loginBtn);
          super.unblock("formInput");
		      loginBtn.load(false);
      	});
    });

  }
}