import DomUtils from "../../utils/DomUtils.js";
import BaseComponent from "../base_component/BaseComponent.js";
import {addclass, toggleClass} from "../../utils/cssUtils.js";
import html from "./AddBrandComponent-ui.html";


export default class AddBrandComponent extends BaseComponent{
  constructor({container, callBack}) {
  	super(container,html);	
  	this.uiElements = {
        logoInput: {id:"#logoInput", isFileInput:true},
        fileBox: {id:"#fileBox"}
    };
  	this.callBack = callBack;
  }



  init(){
    document.body.ondrop = function(event){ event.preventDefault()};

  	super.init(); 
    let fileBox = this.uiElements.fileBox.el;
    let fileInput = this.uiElements.logoInput.el;
    

    fileBox.ondragover = fileBox.ondragenter = function(evt) {
      console.log("On drag in");
      addclass(fileBox, "is-primary");
      evt.preventDefault();
    };

     fileBox.ondragleave= function(evt) {
      console.log("On drag out");
      toggleClass(fileBox,false, "is-primary");
      evt.preventDefault();
    };


    fileBox.ondrop = function(evt) {
      toggleClass(fileBox,false, "is-primary");
      evt.preventDefault();
      // pretty simple -- but not for IE :(
      fileInput.files = evt.dataTransfer.files;

      // If you want to use some of the dropped files
      const dT = new DataTransfer();
      dT.items.add(evt.dataTransfer.files[0]);
      
      fileInput.files = dT.files;
      fileInput.dispatchEvent(new Event('change'));
      
    };
   
  }

}



