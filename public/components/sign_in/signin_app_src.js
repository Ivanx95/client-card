import handleError from "../../utils/errorHandler.js"
import requests from "../../api/authRequests.js"
import html from "./SignInComponent-ui.js";
import SinglePageComponent from "../base_component/SinglePageComponent.js";
import _validate from "../../../shared/ValidationUtils.mjs";
import UserConstrains from "../../../shared/UserConstrains.mjs";

class SignInApp extends SinglePageComponent{

  constructor() {
    let container = document.querySelector("#mainModule-ui");  
  	super(container, html());
    this.uiElements = {
    	signInBtn:{id:"#signInBtn"},
    	passwordInput: {id:"#passwordInput"},
    	emailInput: {id:"#emailInput"},
      typeOfUserSelect: {id:"#typeOfUserSelect"},
    	nameInput:{id:"#nameInput"}
    };
    this.hasError=false;
    super.addForm("formAction",this.uiElements.signInBtn);
    super.addForm("userObjectForm",this.uiElements.emailInput);
    super.addForm("userObjectForm",this.uiElements.passwordInput);
    super.addForm("userObjectForm",this.uiElements.nameInput);
    super.addForm("userObjectForm",this.uiElements.typeOfUserSelect);
  }

  init(){
  	super.init();
    let signInBtn = this.uiElements.signInBtn;
    
    signInBtn.el.addEventListener('click', ()=>{

        if(this.hasError){
          super.clearAll("userObjectForm");  
        }
        signInBtn.load(true);
        super.block("userObjectForm");
        
        super.block("formAction",signInBtn);
        let formObject = super.getValues("userObjectForm")
        let body = JSON.stringify(formObject);

        let errors =_validate(formObject)
                      (UserConstrains.email)
                      (UserConstrains.password)
                      (UserConstrains.name)
                      (UserConstrains.typeOfUser,1);
        if(errors.length>0){
          this.hasError=true;
          super.invalidate(errors);
          super.unblock("userObjectForm");
          signInBtn.load(false);
          return;
        }

       
        console.log(body);
        requests.sigIn(body, (res)=>{
          super.unblock("formAction",signInBtn);
          super.unblock("userObjectForm");
          signInBtn.load(false);
          if(res.ok){
            window.location.replace("/");
            return;
          }else{
            res.json().
            then(errors=>{
              this.hasError=true;
              super.invalidate(errors);
            });
          }
        });
    });
  }
}



document.addEventListener('DOMContentLoaded', function() {
  try{
    new SignInApp().init();
  }catch(error){
    handleError(error);
  }
 } , false);