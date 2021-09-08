import BaseComponent from "../base_component/BaseComponent.js";

import html from "./FormScannerComponent-ui.html";


export default class FormScannerComponent extends BaseComponent{
  constructor({container, callBack}) {
  	super(container,html);	
  	this.uiElements = {
      scannerButton:{id:"#scannerButton"},
      moneyInput : {id:"#moneyInput"}
    };
  	this.callBack = callBack;
  }

 
  init(){
  	super.init();
  	this.uiElements.scannerButton.el.addEventListener('click',()=>{
       let total =this.uiElements.moneyInput.el.value;
		  this.callBack('s',{total: total});
	});

  }

}

