
import BaseComponent from "./base_component/BaseComponent.js";
import FormScannerComponent from "./form_scanning/FormScannerComponent.js";
import CardActionsComponent from "./CardActionsComponent.js"
import QrReaderComponent from "./qreader/qrReaderComponent.js"
import {removeAllChildNodes} from "../utils/DomUtils.js";

class DynamicClass {
    constructor (klass, ...opts) {
        return new klass(...opts);
    }
}



export default class RouterComponent{
	constructor(container) {
	this.container = container;
  this.uiElements = {
    routerEl:{id:"#router"},
  };
  this.state={};
    
    this.nestedComponents = {
                              form:{ 
                                controller:FormScannerComponent,
                                id:'f'
                              },
                              actionButtons:{
                               controller:CardActionsComponent, 
                               id:'a'
                              },
                             scanner:{
                               controller:QrReaderComponent, 
                               id:'s'
                              }
                            };
    this.currentComponent = this.nestedComponents.actionButtons;
  }

 
  init(){
  	for (let key in this.uiElements) {
      this.uiElements[key].el = this.container.querySelector(this.uiElements[key].id);
    }
  	this.onChange('a');
  }

  onChange(id, state){
    let comp;
    for (let key in this.nestedComponents) {
      if(this.nestedComponents[key].id == id){
        comp = this.nestedComponents[key];
      }
    }
  	removeAllChildNodes(this.uiElements.routerEl.el);
  	const controller = new DynamicClass(
                                comp.controller,{
                                  container: this.uiElements.routerEl.el ,
                                  callBack: (id, state)=>this.onChange(id, state),
                                  state: state
                                });
  	controller.init();
  }
}