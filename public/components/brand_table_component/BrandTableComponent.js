import DomUtils from "../../utils/DomUtils.js";
import BaseComponent from "../base_component/BaseComponent.js";
import requests from "../../api/request.js" 


export default class BrandTableComponent extends BaseComponent{
  constructor({container, callBack}) {
    super(container,null);  
    this.uiElements = {
        mainComponent: {id:"#mainComponent"}
    };
    this.callBack = callBack;
  }

 
  init(){
    super.init(); 
   
   let addCompanies =DomUtils.create("button","button","Añadir empresa");
   addCompanies.addEventListener("click", ()=>{
    this.callBack('add',{});
   });

   requests.getBrands(brands =>{
      this.fillTable(brands);
      
      this.uiElements.mainComponent.el.appendChild(addCompanies);  
      
   });

  let title =DomUtils.create("h1","title","Mis empresas");
  this.uiElements.mainComponent.el.appendChild(title);

  }

  fillTable(companies){

  let table = DomUtils.createTable(["Nombre de empresa","Tarjeta"]);

   const qrCodeCel = (company)=>{
    let circle = DomUtils.createAppend("span","icon",DomUtils.createAppend("i","fas fa-qrcode"));
    
    circle.style=`color:${company.brandColor}`;
    let a = DomUtils._createAppend("a","button")
          (DomUtils._createAppend("span","icon-text has-text-primary")
            (circle)())();

    let th = 
    DomUtils._createAppend("th","has-text-centered")(a)();
    a.addEventListener("click", ()=>{
      let state  = {
              brand: company
            };
      this.callBack("seeT", state);
    });
    return th; 
   }

   const nameCel= (company)=>{
      let th = DomUtils.createAppend("th",null,DomUtils.create("abbr",null, company.name));
      return th; 
   }
   const transformers = [nameCel,qrCodeCel];

   //let rows =  DomUtils.createRows(companies);
   companies.forEach(e=>{
    let tr = DomUtils.createAppend("tr");
    transformers.forEach(h=>{
      tr.appendChild(h(e));
    })
    table._tBody.appendChild(tr);
   });
   
   
   
   this.uiElements.mainComponent.el.appendChild(table);
  }

}



