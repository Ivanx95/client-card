import BaseComponent from "./BaseComponent.js";

import formHTML from "./FormScannerComponent-ui.js";


export default class FormScannerComponent extends BaseComponent{
  constructor({container, callBack}) {
  	super(container,formHTML);	
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

