import DomUtils from "../../utils/DomUtils.js";
import BaseComponent from "../base_component/BaseComponent.js";

import formHTML from "./AddBrandComponent-ui.js";


export default class AddBrandComponent extends BaseComponent{
  constructor({container, callBack}) {
  	super(container,formHTML);	
  	this.uiElements = {
        logoInput: {id:"#logoInput", isFileInput:true}
    };
  	this.callBack = callBack;
  }

 
  init(){
  	super.init(); 
    
   
  }

}



