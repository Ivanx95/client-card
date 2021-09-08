/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./public/components/CardActionsComponent-ui.html":
/*!********************************************************!*\
  !*** ./public/components/CardActionsComponent-ui.html ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// Module
var code = "<section class=\"section\">\n\t<div id=\"greetingComponent-ui\"></div>\n\t<div class=\"container\">\n\t\t\t<div class=\"columns\">\n\t\t\t\t<div class=\"column\"></div>\n\t\t\t\t<div class=\"column is-three-fifths\">\n\t\t\t\t\t<div class=\"hero\">\n\t\t\t\t\t\t\t<div class=\"card\">\n\t\t\t\t\t\t\t\t<div class=\"card-content\">\n\t\t\t\t\t\t\t\t\t<div class=\"content\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"field\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"control\">\n\t\t\t\t\t\t\t\t\t\t\t\t<button id =\"creditAction\" class=\"button is-primary is-fullwidth\">Abonar</button>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"field\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"control\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<button  id=\"redemAction\" class=\"button is-fullwidth\">Redimir</button>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\t\n\t\t\t\t\t\t\t\t\t<!--content -->\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<!--card-content -->\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<!--card -->\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t<!--hero -->\n\t\t\t\t\t</div>\n\t\t\t\t<!--column -->\n\t\t\t</div>\n\t\t\t<div class=\"column\"></div>\n\t\t<!--columns -->\n\t\t</div>\n\t<!--container -->\n\t</div>\n</section>";
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);

/***/ }),

/***/ "./public/components/add_brand/AddBrandComponent-ui.html":
/*!***************************************************************!*\
  !*** ./public/components/add_brand/AddBrandComponent-ui.html ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// Module
var code = "<section class=\"section\">\n\t<div class=\"container\">\n\t\t<div class=\"columns\">\n\t\t\t<div class=\"column\"></div>\n\t\t\t<div class=\"column is-four-fifths\">\n\t\t\t\t<div class=\"hero\">\n\t\t\t\t\t<div class=\"container\">\n\t\t\t\t\t\t<div class=\"card\">\n\t\t\t\t\t\t\t\t\t<form method=\"POST\" action=\"/file/upload\" enctype=\"multipart/form-data\" >\n\t\t\t\t\t\t\t\t\t<div class=\"card-content\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"content\">\n\t\t\t\t\t\t\t\t\t\t\t\t<h1>Añadir una empresa</h1>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"field\" for=\"nameInput\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"label\">Nombre</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"control\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input required class=\"input\" name=\"name\" id=\"nameInput\" type=\"text\" placeholder=\"Ingrese nombre de la compañia\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"field\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"label\">Color del código</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"control\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t \t<input type=\"color\" name=\"brandColor\" value=\"#ff0000\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"field\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"label\">Logotipo</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"file\" for=\"logoInput\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t  <label class=\"file-label\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t    <input required id=\"logoInput\" class=\"file-input\" type=\"file\" name=\"logo\"  accept=\"image/*\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t    <span class=\"file-cta\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t      <span class=\"file-icon\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t        <i class=\"fas fa-upload\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t      </span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t      <span class=\"file-label\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t        Eliga un archivo…\n\t\t\t\t\t\t\t\t\t\t\t\t\t      </span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t    </span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t  </label>\n\t\t\t\t\t\t\t\t\t\t\t\t    </div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"field is-grouped\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t <div class=\"control\"> \n\t\t\t\t\t\t\t\t\t\t\t\t\t \t<button class=\"button is-link\" id=\"addBrandBtn\">Añadir</button>\n\t\t\t\t\t\t\t\t\t\t\t\t \t</div>\n\t\t\t\t\t\t\t\t\t\t\t \t</div>\n\t\t\t\t\t\t\t\t\t \t</div>\n\t\t\t\t\t\t\t\t \t</div>\n\t\t\t\t\t\t\t\t \t</form>\n\t\t\t\t\t\t\t \t</div>\n\t\t\t\t\t \t\t</div>\n\t\t \t\t\t\t</div>\n\t\t \t\t\t</div>\n\t\t\t\t\t<div class=\"column\"></div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</section>";
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);

/***/ }),

/***/ "./public/components/authorization/AuthorizationComponent-ui.html":
/*!************************************************************************!*\
  !*** ./public/components/authorization/AuthorizationComponent-ui.html ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// Module
var code = "<div class=\"modal\" id=\"modal\">\n  <div class=\"modal-background\"></div>\n  <div class=\"modal-card\">\n    <header class=\"modal-card-head\">\n      <p class=\"modal-card-title\">Autorización</p>\n      <button  id=\"closeBtn\" class=\"delete\" aria-label=\"close\"></button>\n    </header>\n    <section id=\"content\" class=\"modal-card-body\">\n     \n    </section>\n    <footer class=\"modal-card-foot\">\n      <button id=\"acceptBtn\" class=\"button is-success\">Aceptar</button>\n      <button id=\"cancelBtn\" class=\"button\">Cancelar</button>\n    </footer>\n  </div>\n</div>";
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);

/***/ }),

/***/ "./public/components/card_template_viewer/CardTemplateModal-ui.html":
/*!**************************************************************************!*\
  !*** ./public/components/card_template_viewer/CardTemplateModal-ui.html ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// Module
var code = " <!-- Content ... -->\n <div>\n \t<h1 class=\"title\">¿Esta seguro de realizar esa acción?</h1>\n\n \t<div class=\"field\" for=\"dataInput\">\n \t\t<label class=\"label\">Ingrese nombre de la empresa</label>\n \t\t<div class=\"control\">\n \t\t\t<input id=\"dataInput\" name=\"keyWord\" class=\"input\" type=\"text\">\n \t\t</div>\n \t</div>\n </div>";
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);

/***/ }),

/***/ "./public/components/card_template_viewer/card_template_viewer-ui.html":
/*!*****************************************************************************!*\
  !*** ./public/components/card_template_viewer/card_template_viewer-ui.html ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// Module
var code = " <section class=\"section\">\n \t<div class=\"container\">\n \t\t<div class=\"columns\">\n \t\t\t<div class=\"column\"></div>\n \t\t\t<div class=\"column is-four-fifths\">\n \t\t\t\t<div class=\"hero\">\n \t\t\t\t\t<div class=\"container\">\n \t\t\t\t\t\t<div class=\"card\">\n \t\t\t\t\t\t\t<div class=\"card-header\">\n \t\t\t\t\t\t\t\t<p model=\"brand.name\" class=\"card-header-title\">\n \t\t\t\t\t\t\t\t\t\n \t\t\t\t\t\t\t\t</p>\n \t\t\t\t\t\t\t</div>\n \t\t\t\t\t\t\t<div class=\"card-image\">\n \t\t\t\t\t\t\t\t<figure class=\"image\" id=\"qrHolder\">\n \t\t\t\t\t\t\t\t</figure>\n \t\t\t\t\t\t\t</div>\n \t\t\t\t\t\t\t<div class=\"card-content\">\n \t\t\t\t\t\t\t\t<div class=\"content\">\n \t\t\t\t\t\t\t\t\t<div class=\"columns is-gapless\">\n \t\t\t\t\t\t\t\t\t\t<div class=\"column\" >\n \t\t\t\t\t\t\t\t\t\t\t<div class=\"field has-addons has-addons-centered\">\n \t\t\t\t\t\t\t\t\t\t\t\t<p id=\"pctgIcon\" class=\"control has-tooltip-info\">\n \t\t\t\t\t\t\t\t\t\t\t\t\t<!--<span class=\"has-text-weight-medium\">0.0</span>-->\n \t\t\t\t\t\t\t\t\t\t\t\t\t<a class=\"button is-light is-static\">\n \t\t\t\t\t\t\t\t\t\t\t\t\t\t<span>Porcentaje de crédito</span>\n \t\t\t\t\t\t\t\t\t\t\t\t\t\t<span id=\"pctgIcon\" class=\"icon has-text-info\">\n \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fas fa-question-circle\"></i>\n \t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n \t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n \t\t\t\t\t\t\t\t\t\t\t\t</p>\n \t\t\t\t\t\t\t\t\t\t\t\t<p class=\"control is-expanded has-icons-left\">\n \t\t\t\t\t\t\t\t\t\t\t\t\t<input id=\"cdtPrctgInput\" step=\"1\" max=\"100\"\n \t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"input\" type=\"number\" placeholder=\"1\"\n \t\t\t\t\t\t\t\t\t\t\t\t\t\t\tnumber-type=\"integer\"\n \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t>\n \t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"icon is-small is-left\">\n \t\t\t\t\t\t\t\t\t\t\t\t\t\t%\n \t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n \t\t\t\t\t\t\t\t\t\t\t\t</p>\n \t\t\t\t\t\t\t\t\t\t\t</div>\n \t\t\t\t\t\t\t\t\t\t</div>\n \t\t\t\t\t\t\t\t\t</div>\n \t\t\t\t\t\t\t\t\t<div class=\"columns\">\n \t\t\t\t\t\t\t\t\t\t<div class=\"column\">\n\n \t\t\t\t\t\t\t\t\t\t\t<div class=\"field has-addons has-addons-centered\">\n \t\t\t\t\t\t\t\t\t\t\t\t<p  id=\"rdtnIcon\" class=\"control has-tooltip-info\">\n \t\t\t\t\t\t\t\t\t\t\t\t\t<a class=\"button is-light is-static\">\n \t\t\t\t\t\t\t\t\t\t\t\t\t\t<span>Porcentaje de Redención:</span>\n \t\t\t\t\t\t\t\t\t\t\t\t\t\t<span  class=\"icon has-text-info \">\n \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fas fa-question-circle\"></i>\n \t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n \t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n \t\t\t\t\t\t\t\t\t\t\t\t</p>\n \t\t\t\t\t\t\t\t\t\t\t\t<p class=\"control has-icons-left\">\n\n \t\t\t\t\t\t\t\t\t\t\t\t\t<input id=\"rdtPrctgInput\" step=\"1\" max=\"100\" \n\t\t\t\t\t\t\t\t\t\t\t\t\t\t   class=\"input\" type=\"number\" placeholder=\"1\" number-type=\"integer\">\n \t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"icon is-small is-left\">\n \t\t\t\t\t\t\t\t\t\t\t\t\t\t%\n \t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n \t\t\t\t\t\t\t\t\t\t\t\t</p>\n \t\t\t\t\t\t\t\t\t\t\t</div>\n \t\t\t\t\t\t\t\t\t\t</div>\n \t\t\t\t\t\t\t\t\t</div>\n \t\t\t\t\t\t\t\t\t<div class=\"columns\">\n \t\t\t\t\t\t\t\t\t\t<div class=\"column\">\n \t\t\t\t\t\t\t\t\t\t\t<a id=\"saveBtn\" class=\"button is-success\">Guardar</a>\n \t\t\t\t\t\t\t\t\t\t</div>\n \t\t\t\t\t\t\t\t\t</div>\n\n\n \t\t\t\t\t\t\t\t</div>\n \t\t\t\t\t\t\t</div>\n \t\t\t\t\t\t</div>\n \t\t\t\t\t</div>\n \t\t\t\t</div>\n \t\t\t</div>\n \t\t\t<div class=\"column\"></div>\n \t\t</div>\n \t</div>\n </section>";
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);

/***/ }),

/***/ "./public/components/form_scanning/FormScannerComponent-ui.html":
/*!**********************************************************************!*\
  !*** ./public/components/form_scanning/FormScannerComponent-ui.html ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// Module
var code = "<div class=\"hero\">\n\t<div class=\"container\">\n\t\t\t<div class=\"field\">\n\t\t\t  <label class=\"label\">Folio</label>\n\t\t\t  <div class=\"control\">\n\t\t\t    <input autocomplete=\"off\" class=\"input\" type=\"text\" placeholder=\"Ingrese el folio de su cuenta\">\n\t\t\t  </div>\n\t\t\t</div>\n\n\t\t\t<div class=\"field\">\n\t\t\t  <label class=\"label\">Total</label>\n\t\t\t  <div class=\"control has-icons-left\">\n\t\t\t    <input autocomplete=\"off\" id=\"moneyInput\" class=\"input is-success\" type=\"text\" placeholder=\"0.0\" pattern=\"^\\$[1-9]\\d{1,2}(,\\d{3})*(\\.\\d+)?$\">\n\t\t\t    <span class=\"icon is-small is-left\">\n      \t\t\t\t\t$\n    \t\t\t</span>\n\t\t\t  </div>\n\t\t\t</div>\n\t\t\t<div class=\"field is-grouped\">\n\t\t\t  <div class=\"control\">\n\t\t\t    <button id=\"scannerButton\"class=\"button is-link\">Scanear</button>\n\t\t\t  </div>\n\t\t\t</div>\n\t\t\n\t</div>\n</div>";
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

/***/ "./public/components/qreader/qrReaderComponent-ui.html":
/*!*************************************************************!*\
  !*** ./public/components/qreader/qrReaderComponent-ui.html ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// Module
var code = "<section class=\"section\">\n\t<div class=\"container is-widescreen\">\n\t\t<canvas id=\"canvas\" hidden/>\n\t</div>\n\t<div id=\"output\" hidden>\n\t\t<div id=\"outputMessage\">No QR code detected.</div>\n\t\t<div hidden>\n\t\t\t<b>Data:</b><span id=\"outputData\"></span>\n\t\t</div>\n\t</div>\n</section>";
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

/***/ "./public/components/CardActionsComponent.js":
/*!***************************************************!*\
  !*** ./public/components/CardActionsComponent.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CardActionsComponent)
/* harmony export */ });
/* harmony import */ var _greetingComponent_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./greetingComponent.js */ "./public/components/greetingComponent.js");
/* harmony import */ var _CardActionsComponent_ui_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CardActionsComponent-ui.html */ "./public/components/CardActionsComponent-ui.html");
/* harmony import */ var _base_component_BaseComponent_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./base_component/BaseComponent.js */ "./public/components/base_component/BaseComponent.js");




class CardActionsComponent extends _base_component_BaseComponent_js__WEBPACK_IMPORTED_MODULE_2__.default{

  constructor({container, callBack}) {
  	super(container, _CardActionsComponent_ui_html__WEBPACK_IMPORTED_MODULE_1__.default);
    this.uiElements = {
    	creditBtn:{id:"#creditAction"},
    	redemBtn: {id:"#redemAction"}
    };
    this.creditBtn = null;
    this.callBack = callBack;
    
  }
  init(){
    let greetingContainer = this.container.querySelector("#greetingComponent-ui");  
    this.greetingComponent =new _greetingComponent_js__WEBPACK_IMPORTED_MODULE_0__.default(greetingContainer)
  	super.init();
    this.greetingComponent.init();
  	this.creditBtn = this.uiElements.creditBtn.el;
    this.creditBtn.addEventListener('click', ()=>{
      this.callBack('f');
    });
  }

  getCreditBtn(){
  	return this.creditBtn;
  }
}

/***/ }),

/***/ "./public/components/RouterComponent.js":
/*!**********************************************!*\
  !*** ./public/components/RouterComponent.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ RouterComponent)
/* harmony export */ });
/* harmony import */ var _form_scanning_FormScannerComponent_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./form_scanning/FormScannerComponent.js */ "./public/components/form_scanning/FormScannerComponent.js");
/* harmony import */ var _card_template_viewer_CardTemplateViewerController_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./card_template_viewer/CardTemplateViewerController.js */ "./public/components/card_template_viewer/CardTemplateViewerController.js");
/* harmony import */ var _utils_DynamicClass_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/DynamicClass.js */ "./public/utils/DynamicClass.js");
/* harmony import */ var _add_brand_AddBrandComponent_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./add_brand/AddBrandComponent.js */ "./public/components/add_brand/AddBrandComponent.js");
/* harmony import */ var _brand_table_component_BrandTableComponent_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./brand_table_component/BrandTableComponent.js */ "./public/components/brand_table_component/BrandTableComponent.js");
/* harmony import */ var _CardActionsComponent_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./CardActionsComponent.js */ "./public/components/CardActionsComponent.js");
/* harmony import */ var _qreader_qrReaderComponent_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./qreader/qrReaderComponent.js */ "./public/components/qreader/qrReaderComponent.js");
/* harmony import */ var _utils_DomUtils_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/DomUtils.js */ "./public/utils/DomUtils.js");
/* harmony import */ var _utils_Utils_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/Utils.js */ "./public/utils/Utils.js");














class RouterComponent{
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
      controller:_form_scanning_FormScannerComponent_js__WEBPACK_IMPORTED_MODULE_0__.default,
      id:'f'
    },
    actionButtons:{
     controller:_CardActionsComponent_js__WEBPACK_IMPORTED_MODULE_5__.default, 
     id:'a'
   },
   scanner:{
     controller:_qreader_qrReaderComponent_js__WEBPACK_IMPORTED_MODULE_6__.default, 
     id:'s'
   },
   addBrand:{
    controller: _add_brand_AddBrandComponent_js__WEBPACK_IMPORTED_MODULE_3__.default,
    id: 'add'
  },
  seeBrands:{
    controller: _brand_table_component_BrandTableComponent_js__WEBPACK_IMPORTED_MODULE_4__.default,
    id: 'see'
  },
  seeTemplates: {
    controller: _card_template_viewer_CardTemplateViewerController_js__WEBPACK_IMPORTED_MODULE_1__.default,
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
  _utils_Utils_js__WEBPACK_IMPORTED_MODULE_8__.default.log(`Configuring: ${id}`);
  let comp;
  for (let key in this.nestedComponents) {
    if(this.nestedComponents[key].id == id){
      comp = this.nestedComponents[key];
    }
  }
  _utils_DomUtils_js__WEBPACK_IMPORTED_MODULE_7__.default.removeAllChildNodes(this.uiElements.routerEl.el);
  const controller = new _utils_DynamicClass_js__WEBPACK_IMPORTED_MODULE_2__.default(
    comp.controller,{
      container: this.uiElements.routerEl.el ,
      callBack: (id, state)=>this.onChange(id, state),
      state: state
    });
  controller.init();
}
}

/***/ }),

/***/ "./public/components/add_brand/AddBrandComponent.js":
/*!**********************************************************!*\
  !*** ./public/components/add_brand/AddBrandComponent.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AddBrandComponent)
/* harmony export */ });
/* harmony import */ var _utils_DomUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/DomUtils.js */ "./public/utils/DomUtils.js");
/* harmony import */ var _base_component_BaseComponent_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../base_component/BaseComponent.js */ "./public/components/base_component/BaseComponent.js");
/* harmony import */ var _AddBrandComponent_ui_html__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AddBrandComponent-ui.html */ "./public/components/add_brand/AddBrandComponent-ui.html");






class AddBrandComponent extends _base_component_BaseComponent_js__WEBPACK_IMPORTED_MODULE_1__.default{
  constructor({container, callBack}) {
  	super(container,_AddBrandComponent_ui_html__WEBPACK_IMPORTED_MODULE_2__.default);	
  	this.uiElements = {
        logoInput: {id:"#logoInput", isFileInput:true}
    };
  	this.callBack = callBack;
  }

 
  init(){
  	super.init(); 
    
   
  }

}





/***/ }),

/***/ "./public/components/authorization/AuthorizaionComponent.js":
/*!******************************************************************!*\
  !*** ./public/components/authorization/AuthorizaionComponent.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "modal": () => (/* binding */ modal)
/* harmony export */ });
/* harmony import */ var _base_component_SinglePageComponent_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../base_component/SinglePageComponent.js */ "./public/components/base_component/SinglePageComponent.js");
/* harmony import */ var _utils_cssUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/cssUtils.js */ "./public/utils/cssUtils.js");
/* harmony import */ var _AuthorizationComponent_ui_html__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AuthorizationComponent-ui.html */ "./public/components/authorization/AuthorizationComponent-ui.html");
/* harmony import */ var _utils_DomUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/DomUtils.js */ "./public/utils/DomUtils.js");
/* harmony import */ var _decorators_ActionDecorator_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../decorators/ActionDecorator.js */ "./public/decorators/ActionDecorator.js");







const FORM_NAME = "formInput";

class AuthorizaionComponent extends _base_component_SinglePageComponent_js__WEBPACK_IMPORTED_MODULE_0__.default{

	constructor() {
		let container = document.querySelector("#modal");  
		super(container,_AuthorizationComponent_ui_html__WEBPACK_IMPORTED_MODULE_2__.default);

		this.modal  = {id:"#modal"};
		this.cancelButton =  {id:"#cancelBtn"};
		this.acceptBtn  ={id:"#acceptBtn"};
		this.closeBtn  ={id:"#closeBtn"};
		this.content = {id:"#content"};

		this.uiElements = {
			modal: this.modal,
			cancelButton: this.cancelButton, 
			acceptBtn: this.acceptBtn,
			content: this.content,
			closeBtn: this.closeBtn
		}

		this.state= {
			closed: false
		}
	}

	clearContent(){
		this.subController = null;
		this.keyWord = null;
		this.callBack = null;
		_utils_DomUtils_js__WEBPACK_IMPORTED_MODULE_3__.default.removeAllChildNodes(this.content.el);
	}

	clearForm(){
		this.subController.clearContent(FORM_NAME);  
	}
	
	auth(){
		if(!this.subController|| !this.keyWord){
			return false;
		}
		
		let body = this.subController.getValues(FORM_NAME);
        return this.keyWord == body.keyWord;
	}

	init(){
		super.init();
		const hide2  =  this.hide.bind(this);
		const apply2  =  this.apply.bind(this);
		this.cancelButton.el.addEventListener("click",hide2);
		this.closeBtn.el.addEventListener("click",hide2);

		this.acceptBtn.el.addEventListener("click",apply2);
	}

	apply(){
		if(this.auth()){
			this.callBack();
			this.hide();
		}else{
			const errors  = [{typeOfError:"keyWord", errorMessage:"Valor incorrecto"}];
			this.subController.invalidate(errors);
		}
	}

	show(subController, keyWord, callBack){

		const apply2  =  this.apply.bind(this);

		this.state.closed=true;
		(0,_utils_cssUtils_js__WEBPACK_IMPORTED_MODULE_1__.toggleClass)(this.uiElements.modal.el,
			this.state.closed, "is-active");
		this.subController = new subController(this.content.el);

		this.subController.getFormElements(FORM_NAME)
			.forEach(el =>{
				el.decorator = {class: _decorators_ActionDecorator_js__WEBPACK_IMPORTED_MODULE_4__.default, action:apply2};
			})

		this.subController.init();
		this.keyWord = keyWord;
		this.callBack = callBack;
	}

	hide(){
		this.state.closed=false;
		(0,_utils_cssUtils_js__WEBPACK_IMPORTED_MODULE_1__.toggleClass)(this.uiElements.modal.el,
			this.state.closed, "is-active");
	}

	setContent(el){
		this.content.el.appendChild(el);
	}
}

const  modal = new AuthorizaionComponent();
modal.init();


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

/***/ "./public/components/base_component/SinglePageComponent.js":
/*!*****************************************************************!*\
  !*** ./public/components/base_component/SinglePageComponent.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SinglePageComponent)
/* harmony export */ });
/* harmony import */ var _BaseComponent_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BaseComponent.js */ "./public/components/base_component/BaseComponent.js");



class SinglePageComponent extends _BaseComponent_js__WEBPACK_IMPORTED_MODULE_0__.default{

  constructor(container, html) {
  	super(container, html);
  }

  init(){
  	super.init();
  }
}

/***/ }),

/***/ "./public/components/brand_table_component/BrandTableComponent.js":
/*!************************************************************************!*\
  !*** ./public/components/brand_table_component/BrandTableComponent.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ BrandTableComponent)
/* harmony export */ });
/* harmony import */ var _utils_DomUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/DomUtils.js */ "./public/utils/DomUtils.js");
/* harmony import */ var _base_component_BaseComponent_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../base_component/BaseComponent.js */ "./public/components/base_component/BaseComponent.js");
/* harmony import */ var _api_request_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../api/request.js */ "./public/api/request.js");


 


class BrandTableComponent extends _base_component_BaseComponent_js__WEBPACK_IMPORTED_MODULE_1__.default{
  constructor({container, callBack}) {
    super(container,null);  
    this.uiElements = {
        mainComponent: {id:"#mainComponent"}
    };
    this.callBack = callBack;
  }

 
  init(){
    super.init(); 
   
   let addCompanies =_utils_DomUtils_js__WEBPACK_IMPORTED_MODULE_0__.default.create("button","button","Añadir empresa");
   addCompanies.addEventListener("click", ()=>{
    this.callBack('add',{});
   });

   _api_request_js__WEBPACK_IMPORTED_MODULE_2__.default.getBrands(brands =>{
      this.fillTable(brands);
      
      this.uiElements.mainComponent.el.appendChild(addCompanies);  
      
   });

  let title =_utils_DomUtils_js__WEBPACK_IMPORTED_MODULE_0__.default.create("h1","title","Mis empresas");
  this.uiElements.mainComponent.el.appendChild(title);

  }

  fillTable(companies){

  let table = _utils_DomUtils_js__WEBPACK_IMPORTED_MODULE_0__.default.createTable(["Nombre de empresa","Tarjeta"]);

   const qrCodeCel = (company)=>{
    let circle = _utils_DomUtils_js__WEBPACK_IMPORTED_MODULE_0__.default.createAppend("span","icon",_utils_DomUtils_js__WEBPACK_IMPORTED_MODULE_0__.default.createAppend("i","fas fa-qrcode"));
    
    circle.style=`color:${company.brandColor}`;
    let a = _utils_DomUtils_js__WEBPACK_IMPORTED_MODULE_0__.default._createAppend("a","button")
          (_utils_DomUtils_js__WEBPACK_IMPORTED_MODULE_0__.default._createAppend("span","icon-text has-text-primary")
            (circle)())();

    let th = 
    _utils_DomUtils_js__WEBPACK_IMPORTED_MODULE_0__.default._createAppend("th","has-text-centered")(a)();
    a.addEventListener("click", ()=>{
      let state  = {
              brand: company
            };
      this.callBack("seeT", state);
    });
    return th; 
   }

   const nameCel= (company)=>{
      let th = _utils_DomUtils_js__WEBPACK_IMPORTED_MODULE_0__.default.createAppend("th",null,_utils_DomUtils_js__WEBPACK_IMPORTED_MODULE_0__.default.create("abbr",null, company.name));
      return th; 
   }
   const transformers = [nameCel,qrCodeCel];

   //let rows =  DomUtils.createRows(companies);
   companies.forEach(e=>{
    let tr = _utils_DomUtils_js__WEBPACK_IMPORTED_MODULE_0__.default.createAppend("tr");
    transformers.forEach(h=>{
      tr.appendChild(h(e));
    })
    table._tBody.appendChild(tr);
   });
   
   
   
   this.uiElements.mainComponent.el.appendChild(table);
  }

}





/***/ }),

/***/ "./public/components/card_template_viewer/CardTemplateModalController.js":
/*!*******************************************************************************!*\
  !*** ./public/components/card_template_viewer/CardTemplateModalController.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CardTemplateModalController)
/* harmony export */ });
/* harmony import */ var _base_component_BaseComponent_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../base_component/BaseComponent.js */ "./public/components/base_component/BaseComponent.js");
/* harmony import */ var _CardTemplateModal_ui_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CardTemplateModal-ui.html */ "./public/components/card_template_viewer/CardTemplateModal-ui.html");




class CardTemplateModalController extends _base_component_BaseComponent_js__WEBPACK_IMPORTED_MODULE_0__.default{

	constructor(container) {
		super(container, _CardTemplateModal_ui_html__WEBPACK_IMPORTED_MODULE_1__.default);
		this.dataInput=  {id:"#dataInput"};
		this.uiElements = {
			dataInput : this.dataInput
		};

		super.addForm("formInput",this.dataInput);
	}

	init(){
		super.init();

	}
}

/***/ }),

/***/ "./public/components/card_template_viewer/CardTemplateViewerController.js":
/*!********************************************************************************!*\
  !*** ./public/components/card_template_viewer/CardTemplateViewerController.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CardTemplateViewerController)
/* harmony export */ });
/* harmony import */ var _base_component_BaseComponent_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../base_component/BaseComponent.js */ "./public/components/base_component/BaseComponent.js");
/* harmony import */ var _api_request_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../api/request.js */ "./public/api/request.js");
/* harmony import */ var _card_template_viewer_ui_html__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./card_template_viewer-ui.html */ "./public/components/card_template_viewer/card_template_viewer-ui.html");
/* harmony import */ var _decorators_ActionDecorator_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../decorators/ActionDecorator.js */ "./public/decorators/ActionDecorator.js");
/* harmony import */ var _authorization_AuthorizaionComponent_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../authorization/AuthorizaionComponent.js */ "./public/components/authorization/AuthorizaionComponent.js");
/* harmony import */ var _card_template_viewer_CardTemplateModalController_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../card_template_viewer/CardTemplateModalController.js */ "./public/components/card_template_viewer/CardTemplateModalController.js");







const  redentionText = (prtcg)=>{
return `El porcentaje de redención es el valor que
 transformara los puntos a dinero, por ejemplo 
 con un porcentaje de redención de ${100*prtcg}, 1000 puntos 
 equivale a $${1000*prtcg}.
`;	
}

const  creditText = (prtcg)=>{
return `El porcentaje de credito es el valor que
 transformará el total de la cuenta a puntos, por ejemplo 
 con un porcentaje de credito de ${100*prtcg}, $1000  
 equivale a ${1000*prtcg} puntos.
`;	
}



class CardTemplateViewerController extends _base_component_BaseComponent_js__WEBPACK_IMPORTED_MODULE_0__.default{

	apply(){
		_authorization_AuthorizaionComponent_js__WEBPACK_IMPORTED_MODULE_4__.modal.show(_card_template_viewer_CardTemplateModalController_js__WEBPACK_IMPORTED_MODULE_5__.default, this.brandName, ()=>{

			let body = {creditPercentage:cdtPrctgInput.value,
						redemptionPercentage: rdtPrctgInput.value};

			_api_request_js__WEBPACK_IMPORTED_MODULE_1__.default.updateCardTemplate(this.cardTemplateId, body, ()=>{
				this.init();	
			})
		});	
	}
	constructor({container,state, callBack}) {
		console.log(_card_template_viewer_ui_html__WEBPACK_IMPORTED_MODULE_2__.default);
		super(container,_card_template_viewer_ui_html__WEBPACK_IMPORTED_MODULE_2__.default, [{name:"brand"}]);	
		const apply2  =  this.apply.bind(this);
		let pctgIcon = {id:"#pctgIcon"};
		let rdtnIcon = {id:"#rdtnIcon"};
		let cdtPrctgInput = {id:"#cdtPrctgInput", decorator:{class: _decorators_ActionDecorator_js__WEBPACK_IMPORTED_MODULE_3__.default, action:apply2 }};
		let rdtPrctgInput = {id:"#rdtPrctgInput", decorator:{class: _decorators_ActionDecorator_js__WEBPACK_IMPORTED_MODULE_3__.default, action:apply2 }};
		let saveBtn =  {id:"#saveBtn", listener:{event:"click", fallBack: apply2}};
		this.uiElements = {
			qrComponent: {id:"#qrHolder"},
			pctgIcon,
			rdtnIcon,
			cdtPrctgInput,
			rdtPrctgInput,
			saveBtn
		};
		this.qrcode = null;
		this.callBack = callBack;
		this.state =  state;
		this.cardTemplateId = null;
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

		
		
		let brandId = this.state.brand.brandId;
		_api_request_js__WEBPACK_IMPORTED_MODULE_1__.default.getCartdsTemplate(brandId, (cardTemplates)=>{
			let cardTemplate = cardTemplates[0];

			super.setModel("brand", cardTemplate);
			this.brandName = cardTemplate.brand.name;
			this.uiElements.rdtnIcon.el.setAttribute("data-tooltip", redentionText(cardTemplate.redemptionPercentage));
			this.uiElements.pctgIcon.el.setAttribute("data-tooltip", creditText(cardTemplate.creditPercentage));

			let pageWidth = document.body.clientWidth;
			let width, height;
			width = height = this.qRSizes(pageWidth);
			
			this.cardTemplateId = cardTemplate.cardId;
			this.uiElements.cdtPrctgInput.el.value = cardTemplate.creditPercentage*100;
			this.uiElements.rdtPrctgInput.el.value = cardTemplate.redemptionPercentage*100;
			
			this.qrcode = new QRCode(this.uiElements.qrComponent.el, {
				width : width,
				height : height,
				colorDark: this.state.brand.brandColor,
				logo: this.state.brand.logoURL
			});
			
			this.qrcode.makeCode(cardTemplate.value);
		});
	}

}





/***/ }),

/***/ "./public/components/form_scanning/FormScannerComponent.js":
/*!*****************************************************************!*\
  !*** ./public/components/form_scanning/FormScannerComponent.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ FormScannerComponent)
/* harmony export */ });
/* harmony import */ var _base_component_BaseComponent_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../base_component/BaseComponent.js */ "./public/components/base_component/BaseComponent.js");
/* harmony import */ var _FormScannerComponent_ui_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FormScannerComponent-ui.html */ "./public/components/form_scanning/FormScannerComponent-ui.html");





class FormScannerComponent extends _base_component_BaseComponent_js__WEBPACK_IMPORTED_MODULE_0__.default{
  constructor({container, callBack}) {
  	super(container,_FormScannerComponent_ui_html__WEBPACK_IMPORTED_MODULE_1__.default);	
  	this.uiElements = {
      scannerButton:{id:"#scannerButton"},
      moneyInput : {id:"#moneyInput"}
    };
  	this.callBack = callBack;
  }

 
  init(){
  	super.init();
  	this.uiElements.scannerButton.el.addEventListener('click',()=>{
       let total =this.uiElements.moneyInput.el.value;
		  this.callBack('s',{total: total});
	});

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

/***/ "./public/components/qreader/qrReaderComponent.js":
/*!********************************************************!*\
  !*** ./public/components/qreader/qrReaderComponent.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ qrReaderComponent)
/* harmony export */ });
/* harmony import */ var _qrReaderComponent_ui_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./qrReaderComponent-ui.html */ "./public/components/qreader/qrReaderComponent-ui.html");
/* harmony import */ var _base_component_BaseComponent_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../base_component/BaseComponent.js */ "./public/components/base_component/BaseComponent.js");
/* harmony import */ var _api_request_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../api/request.js */ "./public/api/request.js");



class qrReaderComponent extends _base_component_BaseComponent_js__WEBPACK_IMPORTED_MODULE_1__.default{

 constructor({container, state, callBack}) {
    super(container, _qrReaderComponent_ui_html__WEBPACK_IMPORTED_MODULE_0__.default);
    this.state = state;
    this.callback = callBack;
  }

  
  init(){
   var state = this.state;
   var callback = this.callback;
   var video = document.createElement("video");
   var canvasElement = document.getElementById("canvas");
   var loadingMessage = document.getElementById("loadingMessage");
   var outputContainer = document.getElementById("output");
   var outputMessage = document.getElementById("outputMessage");
   var outputData = document.getElementById("outputData");
   var canvas = canvasElement.getContext("2d");
  var stream;
   function drawLine(begin, end, color) {
      canvas.beginPath();
      canvas.moveTo(begin.x, begin.y);
      canvas.lineTo(end.x, end.y);
      canvas.lineWidth = 4;
      canvas.strokeStyle = color;
      canvas.stroke();
    }
    function tick() {
    //loadingMessage.innerText = "⌛ Loading video..."
      if (video.readyState === video.HAVE_ENOUGH_DATA) {
       // loadingMessage.hidden = true;
        canvasElement.hidden = false;
        outputContainer.hidden = false;

        canvasElement.height = video.videoHeight-250;
        //canvasElement.width = video.videoWidth;
        canvas.drawImage(video, 0, 0, canvasElement.width, canvasElement.height);
        var imageData = canvas.getImageData(0, 0, canvasElement.width, canvasElement.height);
        var code = jsQR(imageData.data, imageData.width, imageData.height, {
          inversionAttempts: "dontInvert",
        });
        if (code) {
          drawLine(code.location.topLeftCorner, code.location.topRightCorner, "#FF3B58");
          drawLine(code.location.topRightCorner, code.location.bottomRightCorner, "#FF3B58");
          drawLine(code.location.bottomRightCorner, code.location.bottomLeftCorner, "#FF3B58");
          drawLine(code.location.bottomLeftCorner, code.location.topLeftCorner, "#FF3B58");
          outputMessage.hidden = true;
          outputData.parentElement.hidden = false;
          outputData.innerText = code.data;
          codeFound(code.data);
          stopVideoOnly(video.srcObject);
          return;
        } else {
          outputMessage.hidden = false;
          outputData.parentElement.hidden = true;
        }
      }
      requestAnimationFrame(tick);
  }

  function stopVideoOnly(stream) {
      stream.getTracks().forEach(function(track) {
          if (track.readyState == 'live' && track.kind === 'video') {
              track.stop();
          }
      });
  }

   function codeFound(uuid){
    canvasElement.hidden = true;
    console.log(`Found ${uuid}`);
    console.log(state);
    _api_request_js__WEBPACK_IMPORTED_MODULE_2__.default.credit(2,uuid,state.total,(data)=>{
        console.log("Credit gave it successfully");
        alert(`Credit: ${data.points}  gave it successfully`);
        callback('a');
    });
   }
    
  // Use facingMode: environment to attemt to get the front camera on phones
    navigator.mediaDevices.getUserMedia({ video: { facingMode: "environment" } }).then(function(stream) {
      video.srcObject = stream;
      video.setAttribute("playsinline", true); // required to tell iOS safari we don't want fullscreen
      video.play();

      requestAnimationFrame(tick);
    });
  }

  

 
}

/***/ }),

/***/ "./public/decorators/ActionDecorator.js":
/*!**********************************************!*\
  !*** ./public/decorators/ActionDecorator.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ActionDecorator)
/* harmony export */ });
/* harmony import */ var _BaseDecorator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BaseDecorator.js */ "./public/decorators/BaseDecorator.js");



class ActionDecorator extends _BaseDecorator_js__WEBPACK_IMPORTED_MODULE_0__.default{

	constructor(action)
	{
		let events = [];
		const onkeyListener = (event)=>{
			if (event.keyCode === 13) {
				event.preventDefault();
				action();
			}
			return;
		}
		
		events.push({name:"keydown" ,listener:onkeyListener});
		super(events);
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

/***/ "./public/utils/Utils.js":
/*!*******************************!*\
  !*** ./public/utils/Utils.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _cssUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cssUtils.js */ "./public/utils/cssUtils.js");



const Konsole = {
	 log: function(data){
		console.log('%c'+data, _cssUtils_js__WEBPACK_IMPORTED_MODULE_0__.consoleStyle.default);
	}
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Konsole); 



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
/*!*************************************!*\
  !*** ./public/administrator_src.js ***!
  \*************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_RouterComponent_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/RouterComponent.js */ "./public/components/RouterComponent.js");




const componentsArray = [];

document.cookie = '{"user":{"name":"Ivan"}}';

function configureComponents(){

  let mainModule = document.querySelector("#mainModule-ui");  

  //componentsArray.push(new GreetingComponent(greetingContainer));
  componentsArray.push(new _components_RouterComponent_js__WEBPACK_IMPORTED_MODULE_0__.default(mainModule));

  componentsArray.forEach(el=>{
    console.log(el);
    el.init();
  });
  
} 

configureComponents();

})();

/******/ })()
;
//# sourceMappingURL=administrator.js.map