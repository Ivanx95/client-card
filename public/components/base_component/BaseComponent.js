import {loading,danger, toggleClass} from "../../utils/cssUtils.js";
import DomUtils from "../../utils/DomUtils.js";
import InputIntegerDecorator from "../../decorators/InputIntegerDecorator.js"
import WriteEditor from "../../decorators/WriteEditor.js"
import DynamicClass from "../../utils/DynamicClass.js";
import getProperty from "../../../shared/ObjectUtils.mjs";

export default class BaseComponent{

  constructor(container, html, modelEditors ) {
    let content = html? html: this.baseHTML();
    this.container = container;
    container.innerHTML = content;
    this.htmlDecorators = [];
    this.htmlDecorators.push(new InputIntegerDecorator());
    this.modelEditors = modelEditors;
    if(modelEditors){
      this.editors = [];
      this.writeEditor = new WriteEditor();
    }
  }

  configureModelEditors(){

    for(let key in this.modelEditors){
      let modelName = this.modelEditors[key].name;
      let uiElements  = this.container.querySelectorAll(`[model*="${modelName}"]`);
      this.editors.push({model:modelName, uiElements: uiElements});
    }
  }


  setModel(modelName, model){
      let editor = this.editors.find(el=> el.model == modelName);
      editor.uiElements.forEach(el=>{
        let path = el.getAttribute("model");
        let value  = getProperty(path, model);
        this.writeEditor.write(el, value);
      })
  }

  /**
   * [getUIElements description]
   * @return {[type]} [description]
   */
   getUIElements(){
    return this.uiElements;
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

  getFormElements(formName){
     if(!formName){
      return;
    }
    if(!this[formName]){
      return;
    }

    return this[formName].uiElements;
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

  clearContent(formName,element){
    const callBack = (key)=>
    {
      key.clearHelper();
      key.invalidate(false);
      key.el.value = null;
    };
    this.affectOthers(formName, element, callBack);
  }

  clearAll(formName,element){
    const callBack = (key)=>
    {
      key.clearHelper();
      key.invalidate(false);
    };
    this.affectOthers(formName, element, callBack);
  }



  resize(event,  fileInput,that){
      // Read in file
    let file = event.target.files[0];
      // Ensure it's an image
      if(file.type.match(/image.*/)) {
          console.log('An image has been loaded');

          // Load the image
          var reader = new FileReader();
          reader.onload = function (readerEvent) {
              var image = new Image();
              image.onload = function (imageEvent) {

                  // Resize the image
                  var canvas = document.createElement('canvas'),
                      max_size = 544,// TODO : pull max size from a site config
                      width = image.width,
                      height = image.height;
                  if (width > height) {
                      if (width > max_size) {
                          height *= max_size / width;
                          width = max_size;
                      }
                  } else {
                      if (height > max_size) {
                          width *= max_size / height;
                          height = max_size;
                      }
                  }
                  canvas.width = width;
                  canvas.height = height;
                  canvas.getContext('2d').drawImage(image, 0, 0, width, height);
                  var dataUrl = canvas.toDataURL(file.type);
                  var resizedImageBlog = that.dataURLToBlob(dataUrl);
                  let resizedImage = new File([resizedImageBlog], file.name)
                  const dT = new DataTransfer();
                  dT.items.add(resizedImage);
                  console.log("Image resized");
                  fileInput.files = dT.files;

                  
                            
              }
              image.src = readerEvent.target.result;
          }
          reader.readAsDataURL(file);
      }
  };




  dataURLToBlob(dataURL) {
      var BASE64_MARKER = ';base64,';
      if (dataURL.indexOf(BASE64_MARKER) == -1) {
          var parts = dataURL.split(',');
          var contentType = parts[0].split(':')[1];
          var raw = parts[1];

          return new Blob([raw], {type: contentType});
      }

      var parts = dataURL.split(BASE64_MARKER);
      var contentType = parts[0].split(':')[1];
      var raw = window.atob(parts[1]);
      var rawLength = raw.length;

      var uInt8Array = new Uint8Array(rawLength);

      for (var i = 0; i < rawLength; ++i) {
          uInt8Array[i] = raw.charCodeAt(i);
      }

      return new Blob([uInt8Array], {type: contentType});
  }

  init(){
    let that = this;
  	for (let key in this.uiElements) {

     this.uiElements[key].el = this.container.querySelector(this.uiElements[key].id);


     let el =    this.uiElements[key].el;
     this.htmlDecorators.forEach(decorator=>{
      if(decorator.predicate(el)){
        decorator.decorate(el);
      }
    });

     if(this.uiElements[key].decorator){
       let decoratorHolder = this.uiElements[key].decorator;

       let decorator =  
       new DynamicClass(
        decoratorHolder.class,
        decoratorHolder.action);

       decorator.decorate(el);
     }


     let id=this.uiElements[key].id.substring(1);
     let query = `[for=${id}]`;
     let fieldContainer = this.container.querySelector(query);
     this.uiElements[key].fieldContainer = fieldContainer;


     let component =this.uiElements[key];

     if(component.listener){
      let listener  = component.listener;
      component.el.addEventListener(listener.event, listener.fallBack);
     }
     if(component.isFileInput){

      let fileLabelComponent =  fieldContainer.querySelector(".file-label");

      component.fileName = DomUtils.createFileNameLabel("...");

      fileLabelComponent.appendChild(component.fileName);
      component.el.addEventListener('change',(e=>{
        this.resize(e, component.el, that);
        toggleClass(fieldContainer,true,"is-success");
        component.fileName.innerHTML = e.srcElement.files[0]?.name;
      }));
    }

    if(component.isPasswordInput){
      DomUtils.configurePasswordInput( component.el,this.container);
    }

    component.helper = DomUtils.createP(`help ${danger}`);


    component.invalidate =  function(flag){toggleClass(component.el,flag,danger)};

    component.errorMessage = (message)=> {
      if(!component.fieldContainer){
        return;
      }
      component.helper.innerHTML = message;
      component.fieldContainer.hasHelper=true;
      DomUtils.toggleElement(component.helper,true, component.fieldContainer);
    };
    component.clearHelper = ()=> {

      if(!component.fieldContainer || !component.fieldContainer.hasHelper){
        return;
      }
      component.fieldContainer.hasHelper=false;
      component.helper.innerHTML = null;
      DomUtils.toggleElement(component.helper,false, component.fieldContainer);
      component.invalidate(false);
    };
    component.load = (flag)=>{toggleClass(component.el,flag,loading)};
  }

  this.configureModelEditors();
}

baseHTML(){
  return `
  <section class="section">
  <div class="container">
  <div class="columns">
  <div class="column"></div>
  <div class="column is-four-fifths">
  <div class="hero">
  <div class="container" id="mainComponent">

  </div>
  </div>
  </div>
  <div class="column"></div>
  </div>
  </div>
  </section>
  `;
}
}
