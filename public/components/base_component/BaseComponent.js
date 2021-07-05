import {loading,danger, toggleClass} from "../../utils/cssUtils.js";
import DomUtils from "../../utils/DomUtils.js";
export default class BaseComponent{
  constructor(container, getHTML ) {
 	let content = getHTML();
	this.container = container;
	container.innerHTML = content;
  }

  addForm(formName, element){
  	if(!element){
  		return;
  	}
  	if(!this[formName]){
  		this[formName] = {formName:formName, uiElements:[]}
  	}
  	if(this[formName].uiElements.indexOf(element)<0){
  		this[formName].uiElements.push(element);
  	}
  }

  getValues(formName){
  	if(!formName){
  		return;
  	}
  	if(!this[formName]){
  		return;
  	}
  	let formObject = {};
  	for (let key in this[formName].uiElements) {
  		let element = this[formName].uiElements[key].el;
  		formObject[element.name] = element.value;
  	}
  	return formObject;
  }


	affectOthers(formName, component, callBack){
	  	if(this[formName]){
	  		for (let key in this[formName].uiElements) {
	  			if(this[formName].uiElements[key] != component){
	  				callBack(this[formName].uiElements[key]);
	  			}
	  		}
	  	}
	}


  invalidate(errors){
    for (let error in errors) {
      for (let key in this.uiElements) {
        let  inputName =this.uiElements[key].el.name;
       if( inputName==errors[error].typeOfError){
          this.uiElements[key].invalidate(true);
          this.uiElements[key].errorMessage(errors[error].errorMessage);
        }
      }
    }
  }

   block(formName, component){
   		const disable = (key)=>
   		{
   			key.el.disabled=true
   		};
  		this.affectOthers(formName, component, disable);
  	}

 

	unblock(formName, element){
	   		const disable = (key)=>
	   		{
	   			key.el.disabled=false
	   		};
	  		this.affectOthers(formName, element, disable);
	}

  clearAll(formName,element){
    const callBack = (key)=>
    {
      key.clearHelper();
      key.invalidate(false);
    };
    this.affectOthers(formName, element, callBack);
  }

  init(){
	for (let key in this.uiElements) {

  	  this.uiElements[key].el = this.container.querySelector(this.uiElements[key].id);

      let id=this.uiElements[key].id.substring(1);
      let query = `[for=${id}]`;
      let fieldContainer = this.container.querySelector(query);
      this.uiElements[key].fieldContainer = fieldContainer;

      let component =this.uiElements[key];

      component.helper = DomUtils.createP(`help ${danger}`);
  	  
      component.invalidate =  function(flag){toggleClass(component.el,flag,danger)};

      component.errorMessage = (message)=> {
          if(!component.fieldContainer){
            return;
          }
          component.helper.innerHTML = message;
          component.fieldContainer.hasHelper=true;
          toggleElement(component.helper,true, component.fieldContainer);
      };
      component.clearHelper = ()=> {

          if(!component.fieldContainer || !component.fieldContainer.hasHelper){
            return;
          }
          component.fieldContainer.hasHelper=false;
          component.helper.innerHTML = null;
          toggleElement(component.helper,false, component.fieldContainer);
          component.invalidate(false);
      };
      component.load = (flag)=>{toggleClass(component.el,flag,loading)};
    }
  }
}