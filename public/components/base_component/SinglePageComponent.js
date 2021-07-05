
import i18n from "../../../i18n.js";
import BaseComponent from "./BaseComponent.js";

export default class SinglePageComponent extends BaseComponent{

  constructor(getHTML) {
    let SinglePageContainer = document.querySelector("#mainModule-ui");  
  	super(SinglePageContainer, getHTML);
    
  }

  init(){
  	super.init();
  }
}