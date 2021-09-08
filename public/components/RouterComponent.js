

import FormScannerComponent from "./form_scanning/FormScannerComponent.js";
import CardTemplateViewerController from "./card_template_viewer/CardTemplateViewerController.js";
import DynamicClass from "../utils/DynamicClass.js";
import AddBrandComponent from "./add_brand/AddBrandComponent.js";
import BrandTableComponent from "./brand_table_component/BrandTableComponent.js";
import CardActionsComponent from "./CardActionsComponent.js"
import QrReaderComponent from "./qreader/qrReaderComponent.js"
import DomUtils from "../utils/DomUtils.js";
import konsole from "../utils/Utils.js";



export default class RouterComponent{
	constructor(container) {
   this.container = container;
   this.uiElements = {
    routerEl:{id:"#router"},
  };

  this.outSideElements={ addCompany:{ id:"#addCompanyA"},
  home: {id:"#home"}};
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
   },
   addBrand:{
    controller: AddBrandComponent,
    id: 'add'
  },
  seeBrands:{
    controller: BrandTableComponent,
    id: 'see'
  },
  seeTemplates: {
    controller: CardTemplateViewerController,
    id: 'seeT'
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


this.outSideElements.addCompany.el.addEventListener("click", ()=>{
  this.onChange('see');
});

this.outSideElements.home.el.addEventListener("click", ()=>{
  this.onChange('a');
});


this.onChange('see');
}

onChange(id, state){
  konsole.log(`Configuring: ${id}`);
  let comp;
  for (let key in this.nestedComponents) {
    if(this.nestedComponents[key].id == id){
      comp = this.nestedComponents[key];
    }
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