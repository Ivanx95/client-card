import escape from "../utils/stringUtils.js";
import html from "./CardComponent-ui.html";
import BaseComponent from "./base_component/BaseComponent.js";

export default class CardComponent extends BaseComponent{
  constructor(container) {
  	super(container, html);
    this.type  = "read-only";
    this.qrcode = null;
	this.uiElements = {
		qrComponent: {id:"#qrHolder"},
		cardTitle: {id:"#card-title"},
		cardPoints: {id:"#card-points"},
		codeP: {id: "#codeP"}
	};
	
    this.container.onkeyup = function(e) {
  	 		if (e.ctrlKey && e.which == 66) {
    			alert("Ctrl + B shortcut combination was pressed");
  			} 
  		}
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

		
		JsBarcode("#barcode", card.value,		
		{ 
		 height: 40,
		 displayValue: false,
		 lineColor: card.brand.brandColor});
		this.uiElements.codeP.el.innerHTML = `Código: ${card.value}`;
		let qrColor = card.brand.brandColor;

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
		this.uiElements.cardTitle.el.innerHTML = escape(card.brand.name);
		this.uiElements.cardPoints.el.innerHTML = card.points;
  }
}

