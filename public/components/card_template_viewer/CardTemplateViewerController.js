import BaseComponent from "../base_component/BaseComponent.js";
import requests from "../../api/request.js"
import html from "./card_template_viewer-ui.html";
import ActionDecorator from "../../decorators/ActionDecorator.js"
import  {modal} from "../authorization/AuthorizaionComponent.js";
import  CardTemplateModalController from "../card_template_viewer/CardTemplateModalController.js";

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



export default class CardTemplateViewerController extends BaseComponent{

	apply(){
		modal.show(CardTemplateModalController, this.brandName, ()=>{

			let body = {creditPercentage:cdtPrctgInput.value,
						redemptionPercentage: rdtPrctgInput.value};

			requests.updateCardTemplate(this.cardTemplateId, body, ()=>{
				this.init();	
			})
		});	
	}
	constructor({container,state, callBack}) {
		console.log(html);
		super(container,html, [{name:"brand"}]);	
		const apply2  =  this.apply.bind(this);
		let pctgIcon = {id:"#pctgIcon"};
		let rdtnIcon = {id:"#rdtnIcon"};
		let cdtPrctgInput = {id:"#cdtPrctgInput", decorator:{class: ActionDecorator, action:apply2 }};
		let rdtPrctgInput = {id:"#rdtPrctgInput", decorator:{class: ActionDecorator, action:apply2 }};
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
		requests.getCartdsTemplate(brandId, (cardTemplates)=>{
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


