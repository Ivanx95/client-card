import BaseComponent from "../base_component/BaseComponent.js";

import html from "./PaymentComponent-ui.html";


export default class PaymentComponent extends BaseComponent{
  constructor({container}) {
  	super(container,html);	
  	this.uiElements = {
      paymentBTN:{id:"#paymentBTN"}
      
    };
  	
  }

 
  init(){
  	super.init();
  	this.uiElements.paymentBTN.el.addEventListener('click',()=>{
       
	   });

  }

}

