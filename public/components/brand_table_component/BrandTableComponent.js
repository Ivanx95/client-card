import DomUtils from "../../utils/DomUtils.js";
import {toggleClass} from "../../utils/cssUtils.js";
import i18next from 'i18next';
import BaseComponent from "../base_component/BaseComponent.js";
import requests from "../../api/request.js" 
import {SELECTED_BRAND} from "../../../shared/constants/constants.js";


export default class BrandTableComponent extends BaseComponent{
  constructor({container, callBack}) {
    super(container,null);  
    this.uiElements = {
      mainComponent: {id:"#mainComponent"}
      
    };
    
    this.callBack = callBack;
    this.trArray=[];
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


    let myCompaniesStr = i18next.t("lbl_my_companies");
    let title =DomUtils.create("h1","title",myCompaniesStr);
    this.uiElements.mainComponent.el.appendChild(title);

  }

  selectBrand(company){
 
      this.navbarTitle.innerHTML = `${this.oldNavBarTitle}  |  ${company.name}`;
  }
  
  fillTable(companies){

    let table = DomUtils.createTable(["Logo", "Nombre de empresa","Tarjeta", "Default"]);

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

    const logoCel = ({logoURL}) =>{

      let companyLogo =  DomUtils.create("image",null, null);
      companyLogo.src=logoURL;
    
      let figure = DomUtils.createAppend("figure","image is-square",companyLogo)
      let th = DomUtils.createAppend("th",null,figure);
      return th; 
    }
    const selectCel = (company, tr, index,selected)=>{
        let checkBox = DomUtils.create("input","is-medium",null);
        checkBox.type = "radio";
        checkBox.name=SELECTED_BRAND;
        if(selected){
          checkBox.setAttribute("checked","checked");
        }
       let th = DomUtils.createAppend("th","has-text-centered is-vcentered",checkBox);
        th.addEventListener('click', (e)=>{
          let myStorage = window.localStorage;
          myStorage.setItem(SELECTED_BRAND, JSON.stringify(company));
          

          const event = new Event(SELECTED_BRAND);
          event.company = company;
          document.dispatchEvent(event);

          checkBox.click();
          this.trArray.forEach(e=>{
            toggleClass(e, false, "is-selected");            
          })
          toggleClass(tr, true, "is-selected");
        })
      return th;
    }
    const transformers = [logoCel, nameCel,qrCodeCel,selectCel];

  this.trArray = [];
   //let rows =  DomUtils.createRows(companies);
   companies.forEach((e, index)=>{
    let tr = DomUtils.createAppend("tr");
    let myStorage = window.localStorage;
    let selectedCompany = JSON.parse(myStorage.getItem(SELECTED_BRAND));
    let selected = false;
    if (selectedCompany && selectedCompany.brandId ==  e.brandId) {
      toggleClass(tr, true, "is-selected");
      selected=true;
    }

    transformers.forEach(h => {
      tr.appendChild(h(e,tr, index,selected));
    }); 

    this.trArray.push(tr);
    table._tBody.appendChild(tr);
  });
   
   
   
   this.uiElements.mainComponent.el.appendChild(table);
 }

}



