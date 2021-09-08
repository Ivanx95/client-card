import DomUtils from "../../utils/DomUtils.js";
import BaseComponent from "../base_component/BaseComponent.js";

import html from "./AddBrandComponent-ui.html";


export default class AddBrandComponent extends BaseComponent{
  constructor({container, callBack}) {
  	super(container,html);	
  	this.uiElements = {
        logoInput: {id:"#logoInput", isFileInput:true}
    };
  	this.callBack = callBack;
  }

 
  init(){
  	super.init(); 
    
   
  }

}



