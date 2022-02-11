import requests from "../../api/authRequests.js"
import html from "./AuthComponent-ui.js";
import BaseComponent from "../base_component/BaseComponent.js";
import _validate from "../../../shared/ValidationUtils.mjs";
import UserConstrains from "../../../shared/UserConstrains.mjs";
import DomUtils from "../../utils/DomUtils.js";

export default class AuthComponent extends BaseComponent{

  constructor(container) {
  	super(container, html());
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
    

    this.uiElements.passwordInput.el.addEventListener("textinput",(event)=>{
      console.log("testing on input")
     
    });

    DomUtils.addEnterHandler(
      this.uiElements.passwordInput.el,
      ()=>this.uiElements.loginBtn.el.click(), 
      true);
    

    loginBtn.el.addEventListener('click', ()=>{
        if(this.hasError){
          super.clearAll("formInput");  
          this.hasError=false;
        }
        loginBtn.load(true);
        super.block("formInput");
        super.block("formAction",loginBtn);
      	let formObject = super.getValues("formInput");

        let formErrors =_validate(formObject)
                      (UserConstrains.email)
                      (UserConstrains.password,1);

         if(formErrors.length>0){
          this.hasError=true;
          super.invalidate(formErrors);
          super.unblock("formAction",loginBtn);
          super.unblock("formInput");
          loginBtn.load(false);
          return;
        }
        

        let body = JSON.stringify(formObject);
      	requests.login(body, (res)=>{
      		if(res.ok){
				    window.location.replace("/");
            return;
      		}else if (res.status === 401){
            let errors =  [
            {typeOfError:"email",errorMessage: "Correo o contraseña incorrecta"},
            {typeOfError:"password", errorMessage: "Correo o contraseña incorrecta"}];
            this.hasError =  true;
            super.invalidate(errors);
            console.log("Un-authenticated");
          }
          super.unblock("formAction",loginBtn);
          super.unblock("formInput");
		      loginBtn.load(false);
      	});
    });

  }
}