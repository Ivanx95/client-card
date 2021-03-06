

import FormScannerComponent from "./form_scanning/FormScannerComponent.js";
import CardTemplateViewerController from "./card_template_viewer/CardTemplateViewerController.js";
import DynamicClass from "../utils/DynamicClass.js";
import AddBrandComponent from "./add_brand/AddBrandComponent.js";
import BrandTableComponent from "./brand_table_component/BrandTableComponent.js";
import CardActionsComponent from "./CardActionsComponent.js"
//import AdminClientComponent from "./preact_components/AdminClientComponent.js"
import QrReaderComponent from "./qreader/qrReaderComponent.js"
import RedeemQRReaderComponent from "./form_scanning/RedeemQRReaderComponent.js"
import PaymentComponent from "./payment/PaymentComponent.js";
import DomUtils from "../utils/DomUtils.js";
import konsole from "../utils/Utils.js";
import {AlertModal} from "./authorization/AlertComponent.js"
import { h, Component, render } from 'preact';
import html from "../components/preact_components/utils/html.js";
import {SELECTED_BRAND, RIDE_DONE} from "../../shared/constants/constants.js"
export default class RouterComponent{
	constructor(container) {
   this.container = container;
   
   this.uiElements = {
    routerEl:{id:"#router"},
    };


    this.defaultController = {
     controller:CardActionsComponent, 
     id:'home'
   };

   this.outSideElements={ addCompany:{ id:"#addCompanyA"},
   home: {id:"#home"}};
   this.state={};

   this.nestedComponents = {
     form:{ 
       controller:FormScannerComponent,
       id:'f'
     },
     actionButtons: this.defaultController,
     scanner:{
      controller:QrReaderComponent, 
      id:'s'},
      redeemScanner:{
     controller:RedeemQRReaderComponent, 
     id:'rS'},
     seeTemplates: {
      controller: CardTemplateViewerController,
      id: 'seeT'},

    addBrand:{
     controller: AddBrandComponent,
     id: 'add'
    },
    seeBrands:{
     controller: BrandTableComponent,
     id: 'companies'
    }

    };
    this.currentComponent = this.nestedComponents.actionButtons;
}


init(){
   

    for (let key in this.uiElements) {
      this.uiElements[key].el = this.container.querySelector(this.uiElements[key].id);
    }

    for (let key in this.outSideElements) {
      let element = this.outSideElements[key];
      element.el = document.querySelector(element.id);
    }

    window.onhashchange = ()=>{
              let hash = window.location.hash.substring(1); //Puts hash in variable, and removes the # character
              this.onChange(hash);
    }
    let hash = window.location.hash.substring(1); //Puts hash in variable, and removes the # character
    if(hash){
      this.onChange(hash);  
    }else{
      this.onChange('home');    
    }


    let myStorage = window.localStorage;
    let rideDone = myStorage.getItem(RIDE_DONE);

    if(rideDone != undefined && rideDone == "false"){
      return;
    }

    let selectedCompanyStr = myStorage.getItem(SELECTED_BRAND);
    

    if(!selectedCompanyStr){
      AlertModal.clearContent();
      render(html `<p>Seleccione su empresa</p>`,AlertModal.getContent());
      AlertModal.show(()=>{
        AlertModal.hide();
        this.onChange('companies');  
       });
      
    }
    
  }

  onChange(id, state){
    konsole.log(`Configuring: ${id}`);
    let comp;
    for (let key in this.nestedComponents) {
      if(this.nestedComponents[key].id == id){
        comp = this.nestedComponents[key];
        break;
      }
    }

    if(!comp){
      comp = this.defaultController;
    }
    DomUtils.removeAllChildNodes(this.uiElements.routerEl.el);
    const controller = new DynamicClass(
      comp.controller,{
        container: this.uiElements.routerEl.el ,
        callBack: (id, state)=>this.onChange(id, state),
        state: state
      });
    controller.init();
  }
}