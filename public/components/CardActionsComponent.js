
import i18n from "../i18n.js";
import getHTML from "./CardActionsComponent-ui.js";
import BaseComponent from "./BaseComponent.js";

export default class CardActionsComponent extends BaseComponent{

  constructor({container, callBack}) {
  	super(container, getHTML);
    this.uiElements = {
    	creditBtn:{id:"#creditAction"},
    	redemBtn: {id:"#redemAction"}
    };
    this.creditBtn = null;
    this.callBack = callBack;
    
  }
  init(){
  	super.init();
  	this.creditBtn = this.uiElements.creditBtn.el;
    this.creditBtn.addEventListener('click', ()=>{
      this.callBack('f');
    });
  }

  getCreditBtn(){
  	return this.creditBtn;
  }
}