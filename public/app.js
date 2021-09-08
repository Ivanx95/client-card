/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./public/components/CardComponent-ui.html":
/*!*************************************************!*\
  !*** ./public/components/CardComponent-ui.html ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// Module
var code = "<div class=\"card\" id=\"section\">\n  <div class=\"card-image\">\n    <figure class=\"image\" id=\"qrHolder\">\n      \n    </figure>\n  </div>\n  <div class=\"card-content\">\n    <div class=\"media\">\n      \n      <div class=\"media-content\">\n        <a class=\"title is-4\" id=\"card-title\">Something</p>\n        \n      </div>\n    </div>\n\n    <div class=\"content\">\n     <p>\n     \t<strong>Puntos: </strong><span id=\"card-points\"></span>\n     </p>\n    </div>\n  </div>\n</div>";
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);

/***/ }),

/***/ "./public/components/greetingComponent-ui.html":
/*!*****************************************************!*\
  !*** ./public/components/greetingComponent-ui.html ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// Module
var code = "<section class=\"section\">\n\t<div class=\"container\">\n\t  <h1 class=\"title\" id=\"greeting\"/>\n\t</div>\n</section>\n\n";
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);

/***/ }),

/***/ "./public/api/request.js":
/*!*******************************!*\
  !*** ./public/api/request.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });

const basePath = "/api";
const cardPath = basePath+"/cards";


function getCards(callBack){
	fetch(cardPath)
	.then(response => response.json())
	.then(data => {
		console.log(data);
		callBack(data);
		});
}


function getBrands(callBack){
	fetch(basePath+"/brands")
	.then(response => response.json())
	.then(data => {
		console.log(data);
		callBack(data);
		});
}

function getCardsByClient(userId,callBack){
	fetch(`${cardPath}/owner/${userId}`)
	.then(response => response.json())
	.then(data => {
		console.log(data);
		callBack(data);
		});
}


function findCards(uuid,opID,callBack){

	let body =  JSON.stringify( {operatorID:opID});
	const headers = new Headers({
	    "Content-Type": "application/json",
	    "Content-Length": JSON.stringify(body).length
	});

	const options = {
    	method: 'POST',
    	body: body,
    	headers: headers
	};


	fetch(`${cardPath}/${uuid}`,options)
	.then(response => response.json())
	.then(data => {
		console.log(data);
		callBack(data);
		});
}



function credit(opID, uuid,totalSale,callBack){

	let body =  JSON.stringify( {totalSale:totalSale,operatorID:opID});
	const headers = new Headers({
	    "Content-Type": "application/json",
	    "Content-Length": JSON.stringify(body).length
	});

	const options = {
    	method: 'POST',
    	body: body,
    	headers: headers
	};

	fetch(`/api/transactions/credit/${uuid}`,options)
	.then(response => response.json())
	.then((data) => {
		callBack(data);
	});
}



function getCartdsTemplate(brandId, callBack){
fetch(`${basePath}/card-template/${brandId}`)
	.then(response => response.json())
	.then(data => {
		console.log(data);
		callBack(data);
		});
}




function updateCardTemplate(cardId,body,callBack){

	let strBody = JSON.stringify(body);
	const headers = new Headers({
	    "Content-Type": "application/json",
	    "Content-Length": strBody.length
	});

	const options = {
    	method: 'PATCH',
    	body: strBody,
    	headers: headers
	};


	fetch(`${basePath}/card-template/${cardId}`,options)
	.then(response => response.json())
	.then(data => {
		console.log(data);
		callBack(data);
		});
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({getCards, 
				findCards,
				credit,
				getCardsByClient,
				getBrands,
				getCartdsTemplate,
				updateCardTemplate});

 

/***/ }),

/***/ "./public/components/base_component/BaseComponent.js":
/*!***********************************************************!*\
  !*** ./public/components/base_component/BaseComponent.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ BaseComponent)
/* harmony export */ });
/* harmony import */ var _utils_cssUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/cssUtils.js */ "./public/utils/cssUtils.js");
/* harmony import */ var _utils_DomUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/DomUtils.js */ "./public/utils/DomUtils.js");
/* harmony import */ var _decorators_InputIntegerDecorator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../decorators/InputIntegerDecorator.js */ "./public/decorators/InputIntegerDecorator.js");
/* harmony import */ var _decorators_WriteEditor_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../decorators/WriteEditor.js */ "./public/decorators/WriteEditor.js");
/* harmony import */ var _utils_DynamicClass_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/DynamicClass.js */ "./public/utils/DynamicClass.js");
/* harmony import */ var _shared_ObjectUtils_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/ObjectUtils.mjs */ "./shared/ObjectUtils.mjs");







class BaseComponent{

  constructor(container, html, modelEditors ) {
    let content = html? html: this.baseHTML();
    this.container = container;
    container.innerHTML = content;
    this.htmlDecorators = [];
    this.htmlDecorators.push(new _decorators_InputIntegerDecorator_js__WEBPACK_IMPORTED_MODULE_2__.default());
    this.modelEditors = modelEditors;
    if(modelEditors){
      this.editors = [];
      this.writeEditor = new _decorators_WriteEditor_js__WEBPACK_IMPORTED_MODULE_3__.default();
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
        let value  = (0,_shared_ObjectUtils_mjs__WEBPACK_IMPORTED_MODULE_5__.default)(path, model);
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

  init(){
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
       new _utils_DynamicClass_js__WEBPACK_IMPORTED_MODULE_4__.default(
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

      component.fileName = _utils_DomUtils_js__WEBPACK_IMPORTED_MODULE_1__.default.createFileNameLabel("...");

      fileLabelComponent.appendChild(component.fileName);
      component.el.addEventListener('change',(e=>{
        (0,_utils_cssUtils_js__WEBPACK_IMPORTED_MODULE_0__.toggleClass)(fieldContainer,true,"is-success");
        component.fileName.innerHTML = e.srcElement.files[0]?.name;
      }));
    }

    if(component.isPasswordInput){
      _utils_DomUtils_js__WEBPACK_IMPORTED_MODULE_1__.default.configurePasswordInput( component.el,this.container);
    }

    component.helper = _utils_DomUtils_js__WEBPACK_IMPORTED_MODULE_1__.default.createP(`help ${_utils_cssUtils_js__WEBPACK_IMPORTED_MODULE_0__.danger}`);


    component.invalidate =  function(flag){(0,_utils_cssUtils_js__WEBPACK_IMPORTED_MODULE_0__.toggleClass)(component.el,flag,_utils_cssUtils_js__WEBPACK_IMPORTED_MODULE_0__.danger)};

    component.errorMessage = (message)=> {
      if(!component.fieldContainer){
        return;
      }
      component.helper.innerHTML = message;
      component.fieldContainer.hasHelper=true;
      _utils_DomUtils_js__WEBPACK_IMPORTED_MODULE_1__.default.toggleElement(component.helper,true, component.fieldContainer);
    };
    component.clearHelper = ()=> {

      if(!component.fieldContainer || !component.fieldContainer.hasHelper){
        return;
      }
      component.fieldContainer.hasHelper=false;
      component.helper.innerHTML = null;
      _utils_DomUtils_js__WEBPACK_IMPORTED_MODULE_1__.default.toggleElement(component.helper,false, component.fieldContainer);
      component.invalidate(false);
    };
    component.load = (flag)=>{(0,_utils_cssUtils_js__WEBPACK_IMPORTED_MODULE_0__.toggleClass)(component.el,flag,_utils_cssUtils_js__WEBPACK_IMPORTED_MODULE_0__.loading)};
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


/***/ }),

/***/ "./public/components/cardFiller.js":
/*!*****************************************!*\
  !*** ./public/components/cardFiller.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CardComponent)
/* harmony export */ });
/* harmony import */ var _utils_stringUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/stringUtils.js */ "./public/utils/stringUtils.js");
/* harmony import */ var _CardComponent_ui_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CardComponent-ui.html */ "./public/components/CardComponent-ui.html");
/* harmony import */ var _base_component_BaseComponent_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./base_component/BaseComponent.js */ "./public/components/base_component/BaseComponent.js");




class CardComponent extends _base_component_BaseComponent_js__WEBPACK_IMPORTED_MODULE_2__.default{
  constructor(container) {
  	super(container, _CardComponent_ui_html__WEBPACK_IMPORTED_MODULE_1__.default);
    this.type  = "read-only";
    this.qrcode = null;
	this.uiElements = {
		qrComponent: {id:"#qrHolder"},
		cardTitle: {id:"#card-title"},
		cardPoints: {id:"#card-points"},
	};
	this.mapColor = {"1":"#ff0000","2":"#ff00ff"};
    
  }

  qRSizes(pageWidth){
  	if(pageWidth<200){
  		return 150;
  	}else if(pageWidth >200 && pageWidth < 500){
  		return pageWidth-50;
  	}else{
  		return 500;
  	}
  }

  init(){
  	super.init();
  }

  createCardElement(card){

	  	let pageWidth = document.body.clientWidth;
		let width, height;
		width = height = this.qRSizes(pageWidth);
	
		let qrColor  = this.mapColor[card.brand.brandColor]||"#000000";
  		this.qrcode = new QRCode(this.uiElements.qrComponent.el, {
						width : width,
						height : height,
						colorDark: qrColor,
						logo: card.brand.logoURL
					});
  		
		this.qrcode.makeCode(card.value);
		let qrElement = document.querySelector("#qrElement");
		if(qrElement){
			qrElement.focus();
			console.log("Centering app to qrCode");
		} 
		this.uiElements.cardTitle.el.innerHTML = (0,_utils_stringUtils_js__WEBPACK_IMPORTED_MODULE_0__.default)(card.brand.name);
		this.uiElements.cardPoints.el.innerHTML = card.points;
  }
}



/***/ }),

/***/ "./public/components/greetingComponent.js":
/*!************************************************!*\
  !*** ./public/components/greetingComponent.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ GreetingComponent)
/* harmony export */ });
/* harmony import */ var _i18n_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../i18n.js */ "./public/i18n.js");
/* harmony import */ var _greetingComponent_ui_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./greetingComponent-ui.html */ "./public/components/greetingComponent-ui.html");
/* harmony import */ var _base_component_BaseComponent_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./base_component/BaseComponent.js */ "./public/components/base_component/BaseComponent.js");






class GreetingComponent extends _base_component_BaseComponent_js__WEBPACK_IMPORTED_MODULE_2__.default {
  constructor(container) {
  	super(container, _greetingComponent_ui_html__WEBPACK_IMPORTED_MODULE_1__.default);
    this.uiElements = {greetingTitle:{id:"#greeting"}};
  }

  init(){
  	super.init();
	let greetingTitle = this.uiElements.greetingTitle.el;
	
	let cookieStr = document.cookie;
	let cookie = JSON.parse(cookieStr);  
	console.log(_i18n_js__WEBPACK_IMPORTED_MODULE_0__.default.messageEs);
	let greetingMsg = _i18n_js__WEBPACK_IMPORTED_MODULE_0__.default.interpolate(_i18n_js__WEBPACK_IMPORTED_MODULE_0__.default.messageEs[0].value, cookie.user.name);
	greetingTitle.innerHTML = greetingMsg;
  }
  
}



/***/ }),

/***/ "./public/decorators/BaseDecorator.js":
/*!********************************************!*\
  !*** ./public/decorators/BaseDecorator.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ BaseDecorator)
/* harmony export */ });

class BaseDecorator{

	constructor(events=[])
	{
		this.events =events;
	}

	/**
	 * [predicate description]
	 * @param  {[type]} obj [description]
	 * @return {[type]}     [description]
	 */
	 predicate(obj){
	 	let isHTML =  obj instanceof HTMLElement;
	 	return isHTML;
	 }

	/**
	 * [decorate description]
	 * @param  {[type]} element [description]
	 * @return {[type]}             [description]
	 */
	 decorate(element){

	 	for (let key in this.events) {
	 		let event = this.events[key];
	 		element.addEventListener(event.name,event.listener, false);	
	 	}

	 	console.log(`Decorating element; ${element}`);
	 }

	}


/***/ }),

/***/ "./public/decorators/InputDecorator.js":
/*!*********************************************!*\
  !*** ./public/decorators/InputDecorator.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ InputDecorator)
/* harmony export */ });
/* harmony import */ var _BaseDecorator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BaseDecorator.js */ "./public/decorators/BaseDecorator.js");


class InputDecorator extends _BaseDecorator_js__WEBPACK_IMPORTED_MODULE_0__.default{

	constructor(events)
	{
		super(events);
	}

	/**
	 * [predicate description]
	 * @param  {[type]} obj [description]
	 * @return {[type]}     [description]
	 */
	 predicate(obj){
	 	var tagName = obj.tagName.toLowerCase();
	 	let isInput	=  tagName == "input";
	 	return super.predicate(obj) && isInput;
	 }
	}


/***/ }),

/***/ "./public/decorators/InputIntegerDecorator.js":
/*!****************************************************!*\
  !*** ./public/decorators/InputIntegerDecorator.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ InputIntegerDecorator)
/* harmony export */ });
/* harmony import */ var _InputDecorator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./InputDecorator.js */ "./public/decorators/InputDecorator.js");



class InputIntegerDecorator extends _InputDecorator_js__WEBPACK_IMPORTED_MODULE_0__.default{

	constructor()
	{
		
		let events = [];
		const onkeyListener = (event)=>{
			let srcElement = event.srcElement;
			if(srcElement.getAttribute("max")){
				let max = srcElement.getAttribute("max");
				let result = srcElement.value+""+event.key;
				if(Number(result)>max){
					event.preventDefault();
				}

			}
			if(event.key=="."){
				event.preventDefault();
			}
			return;
		}
		const onPaste = (event)=>{
			let paste = (event.clipboardData || window.clipboardData).getData('text');
			let srcElement = event.srcElement;
			if(srcElement.getAttribute("max")){
				let max = srcElement.getAttribute("max");
				let currentValue = srcElement.value;
				if(Number(paste+currentValue)>max){
					event.preventDefault();
				}
			}

			if(paste.includes(".")){
				event.preventDefault();	
			}
			return;
		}
		

		events.push({name:"keydown" ,listener:onkeyListener});
		events.push({name:"paste" ,listener:onPaste});
		super(events);
	}

	/**
	 * [predicate description]
	 * @param  {[type]} obj [description]
	 * @return {[type]}     [description]
	 */
	 predicate(obj){
	 	
	 	let isNumber  =  obj.type == "number";
	 	return super.predicate(obj) && isNumber;
	 }

	}


/***/ }),

/***/ "./public/decorators/WriteEditor.js":
/*!******************************************!*\
  !*** ./public/decorators/WriteEditor.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ WriteEditor)
/* harmony export */ });
/* harmony import */ var _BaseDecorator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BaseDecorator.js */ "./public/decorators/BaseDecorator.js");
/* harmony import */ var _InputDecorator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./InputDecorator.js */ "./public/decorators/InputDecorator.js");



class WriteEditor{
	constructor(){
		let base =  new _BaseDecorator_js__WEBPACK_IMPORTED_MODULE_0__.default();
		let input =  new _InputDecorator_js__WEBPACK_IMPORTED_MODULE_1__.default();
		let normalHTML = (el, model)=>{
			el.innerHTML = model;
		};
		let inputHTML = (el, model)=>{
			el.value = model;
		};
		let chain = 
		[{predicate:base.predicate, action:normalHTML},
		{predicate:input.predicate, action:inputHTML}];

		this.chain = chain;
	}

	write(el, model){
		let last = null;
		
		for (var i = 0;  i < this.chain.length; i++) {
			let decorator = this.chain[i];
			if(decorator.predicate(el)){
				last = decorator.action;
			}
		}

		last(el,model);
	}
}


/***/ }),

/***/ "./public/i18n.js":
/*!************************!*\
  !*** ./public/i18n.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_stringUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/stringUtils.js */ "./public/utils/stringUtils.js");


const pattern = "${0}";

const messageEs = [
	{id:"greeting", value:"Bienvenido ${0}"}
]

function interpolate( template, data){
  let result = template.replace(pattern, data);
  return (0,_utils_stringUtils_js__WEBPACK_IMPORTED_MODULE_0__.default)(result);
}

function moneyMatcher(input){
	let result = input.match(this.moneyPattern);
	return result;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({messageEs, interpolate, moneyMatcher});


/***/ }),

/***/ "./public/messaging/Socket.js":
/*!************************************!*\
  !*** ./public/messaging/Socket.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const WebSocketInstance = (function (){
	var instance;

	function createInstance(){
		var object = io();
		return object;
	}

	return {
		getInstance : function(){
			if(!instance){
				instance = createInstance();
			}
			return instance;
		}
	}
})();


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WebSocketInstance);

/***/ }),

/***/ "./public/utils/DomUtils.js":
/*!**********************************!*\
  !*** ./public/utils/DomUtils.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _shared_Curryng_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../shared/Curryng.mjs */ "./shared/Curryng.mjs");


//ui-form utils

/**
 * [configurePasswordInput description]
 * @param  {HTMLElement} component [inputElement]
 * @param  {HTMLElement} container [parent element]
 */
function configurePasswordInput(component, container) {
    let divContainers =  [...container.querySelectorAll(`[is-password=true]`)];
    const parentContainer = divContainers.filter((el)=>{
    	console.log(el);
    	for(let i = 0; i < el.childNodes.length; i++){
    		let children = el.childNodes[i];
    		if( children === component){
    			return true;
    		}
    	}
    })[0];

    
    let iconBtn =  parentContainer.querySelectorAll("a")[0];
    let icon =  iconBtn.querySelectorAll("i")[0];
    let iconStore = true;
    iconBtn.addEventListener("click",()=>{
    	if(iconStore){
	    	icon.className = "fas fa-eye";
	    	component.type="text";	
    	}else{
    		icon.className = "fas fa-eye-slash";
    		component.type="password";
    	}
    	iconStore^=true;
    })

}
/**
 * [Remove all children from node]
 * @param  {[type]} parent [description]
 * @return {[type]}        [description]
 */
function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

const _createAppend = (0,_shared_Curryng_mjs__WEBPACK_IMPORTED_MODULE_0__.default)(createAppend);

function createRows(rows){
	let htmlRows = [];
	for(var i = 0; i< rows.length; i++){
		let row = createAppend("tr",null);
		for (let key in rows[i]) {
			let col = createAppend("th",null,create("abbr",null, rows[i][key]));
			row.appendChild(col);
		}
		
		htmlRows.push(row);
	}
	return htmlRows;
}

function createTable(columns){
	
	
	const _tEl =(el)=>{
		let _t = _createAppend(el,null);
		let theadResult = null;
		for(var i = 0; i< columns.length; i++){
		    if(!theadResult){
		      theadResult = _t(createAppend("th",null,create("abbr",null, columns[i])));
		    }else{
		      theadResult = theadResult(createAppend("th",null,create("abbr",null, columns[i])))
		    }  
		}
		return theadResult;
	}

	let _tBody = createAppend("tbody",null);
	let result = _createAppend("table","table is-hoverable")(_tEl("thead")())(_tBody)();
	result._tBody = _tBody;
	return result;
}



function createAppend(tagName, className,...args){
  let el  =  document.createElement(tagName);
  if(className&&className!=null){
  	el.className= className;	
  }
  args.forEach((i)=>el.appendChild(i));
  return   el;
}


function create(tagName, className, content){
	let div  =  document.createElement("div");
	className=className&&className!=null?`class="${className}"`:"";
	div.innerHTML = `<${tagName} ${className} ">${content}</${tagName}>`;
	return  div.firstChild;
}


function createP(className, content){
	return  create("p",className,content);
}


function fileNameLabel( content){
	return  create("p","file-name",content);
}

function toggleElement (p, flag, el){
	  	if(flag){
	  		el.appendChild(p);
	  	}else{
			el.removeChild(p);
	  	}
}

const DomUtils = {};

DomUtils.removeAllChildNodes = removeAllChildNodes;
DomUtils.create = create;
DomUtils.createP = createP;
DomUtils.toggleElement = toggleElement;
DomUtils.createFileNameLabel = fileNameLabel;
DomUtils.createTable = createTable;
DomUtils.createRows = createRows;
DomUtils.createAppend = createAppend;
DomUtils._createAppend = _createAppend;
DomUtils.configurePasswordInput = configurePasswordInput;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DomUtils);

/***/ }),

/***/ "./public/utils/DynamicClass.js":
/*!**************************************!*\
  !*** ./public/utils/DynamicClass.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DynamicClass)
/* harmony export */ });
class DynamicClass {
  constructor (klass, ...opts) {
    return new klass(...opts);
  }
}

/***/ }),

/***/ "./public/utils/cssUtils.js":
/*!**********************************!*\
  !*** ./public/utils/cssUtils.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "loading": () => (/* binding */ loading),
/* harmony export */   "danger": () => (/* binding */ danger),
/* harmony export */   "toggleClass": () => (/* binding */ toggleClass),
/* harmony export */   "consoleStyle": () => (/* binding */ consoleStyle)
/* harmony export */ });
const loading = "is-loading";
const danger = "is-danger";
const consoleStyle =
 {
 	default:"color:#2c7800;font-family:system-ui;font-size:1rem;"
 }
function toggleClass (el, flag, newClass){
	let className = el.className;
	  	if(flag){
	  		el.className = className.concat(" "+newClass);
	  	}else{
			el.className = className.replace(newClass,"");
	  	}
}


/***/ }),

/***/ "./public/utils/errorHandler.js":
/*!**************************************!*\
  !*** ./public/utils/errorHandler.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handleError)
/* harmony export */ });
function handleError(error){
	let errorContainer = document.createElement("div");

	let errorBanner = document.createElement("p");;
	errorBanner.innerHTML ="Something went wrong";
	errorBanner.className = ["danger"];

	let errorMsg = document.createElement("p");
	errorMsg.innerHTML = error;
	
	errorContainer.appendChild(errorBanner);
	errorContainer.appendChild(errorMsg);

	document.getElementsByTagName("body")[0].appendChild(errorContainer);

}

/***/ }),

/***/ "./public/utils/stringUtils.js":
/*!*************************************!*\
  !*** ./public/utils/stringUtils.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ escape)
/* harmony export */ });
function escape(string) {
	return string.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
}


/***/ }),

/***/ "./shared/Curryng.mjs":
/*!****************************!*\
  !*** ./shared/Curryng.mjs ***!
  \****************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function curry(fn, ...values) {
    return (...next) => (next.length) ? curry(fn, ...values, ...next) : fn(...values);
}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (curry);

/***/ }),

/***/ "./shared/ObjectUtils.mjs":
/*!********************************!*\
  !*** ./shared/ObjectUtils.mjs ***!
  \********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function getProperty(path, model){
	let paths  = path.split(".");
	return getNestedProperty(0, paths, model);

}
function getNestedProperty(index, paths, model){
	if(!model){
		return;
	}
	if(index>=paths.length){
		return model;
	}

	let property  = model[paths[index]];
	index++;
	return getNestedProperty(index, paths, property);
}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getProperty);

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!***************************!*\
  !*** ./public/app_src.js ***!
  \***************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _api_request_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api/request.js */ "./public/api/request.js");
/* harmony import */ var _components_greetingComponent_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/greetingComponent.js */ "./public/components/greetingComponent.js");
/* harmony import */ var _components_cardFiller_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/cardFiller.js */ "./public/components/cardFiller.js");
/* harmony import */ var _utils_stringUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/stringUtils.js */ "./public/utils/stringUtils.js");
/* harmony import */ var _messaging_Socket_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./messaging/Socket.js */ "./public/messaging/Socket.js");
/* harmony import */ var _utils_errorHandler_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils/errorHandler.js */ "./public/utils/errorHandler.js");







const componentsArray = [];
const currentUserId = 1;
let  cardComponent;

const store = {};



function configureComponents(){
	let greetingContainer = document.querySelector("#greetingComponent-ui");	
	let cardContainer = document.querySelector("#card-column-ui");	
	cardComponent = new _components_cardFiller_js__WEBPACK_IMPORTED_MODULE_2__.default(cardContainer);
	componentsArray.push(new _components_greetingComponent_js__WEBPACK_IMPORTED_MODULE_1__.default(greetingContainer));
	componentsArray.push(cardComponent);

	const socket = _messaging_Socket_js__WEBPACK_IMPORTED_MODULE_4__.default.getInstance();
	socket.on(`send/${currentUserId}`, (arg)=>{
		let card = JSON.parse(arg); 
		console.log(card); 
		let cards = store.cards;
		let index = cards.map((c)=>c.cardId).indexOf(card.cardId);
		cards[index] = card;
		store.cards = cards;
		cardComponent.createCardElement(card);
    });
} 

function app(){
 
  
  document.cookie = '{"user":{"name":"Ivan"}}';
  console.log(document.cookie);
  configureComponents(); 

  componentsArray.forEach(el=>{
	console.log(el);
	el.init();
  });

  const cardHolder = document.getElementById("card-table");

  _api_request_js__WEBPACK_IMPORTED_MODULE_0__.default.getCardsByClient(currentUserId,cards =>{
	  cards.forEach(cardEl=>{
	    let row = document.createElement('div');
	    row.className = ["columns"];
		let row1 = document.createElement('div');
		
		row1.className = ["column"];

		let brandButton = document.createElement('button');
		brandButton.className = ["button is-fullwidth"];
		brandButton.innerHTML = (0,_utils_stringUtils_js__WEBPACK_IMPORTED_MODULE_3__.default)(cardEl.brand.name);

		row1.appendChild(brandButton);

		row.appendChild(row1);
		row.cardId = cardEl.cardId;
		row.addEventListener("click",()=>{
		let targetCard= store.cards.find(card=>{
			return card.cardId == row.cardId;
		})
		cardComponent.createCardElement(targetCard);
		});

		cardHolder.appendChild(row);
	});
	store.cards = cards;
   });
}

document.addEventListener('DOMContentLoaded', function() {
	try{
		app();
	}catch(error){
		(0,_utils_errorHandler_js__WEBPACK_IMPORTED_MODULE_5__.default)(error);
	}
 } , false);
   





})();

/******/ })()
;
//# sourceMappingURL=app.js.map