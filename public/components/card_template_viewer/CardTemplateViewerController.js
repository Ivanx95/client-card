import BaseComponent from "../base_component/BaseComponent.js";
import requests from "../../api/request.js"
import html from "./card_template_viewer-ui.html";
import ActionDecorator from "../../decorators/ActionDecorator.js"
import  {modal} from "../authorization/AuthorizaionComponent.js";
import  CardTemplateModalController from "../card_template_viewer/CardTemplateModalController.js";
import  DomUtils from "../../utils/DomUtils.js";
import AdminClientComponent from "../preact_components/AdminClientComponent.js"

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
		super(container,html, [{name:"brand"}]);	
		const apply2  =  this.apply.bind(this);
		let pctgIcon = {id:"#pctgIcon"};
		let rdtnIcon = {id:"#rdtnIcon"};
		let qrContentMessage = {id:"#qrMessage"};
		let cdtPrctgInput = {id:"#cdtPrctgInput", decorator:{class: ActionDecorator, action:apply2 }};
		let rdtPrctgInput = {id:"#rdtPrctgInput", decorator:{class: ActionDecorator, action:apply2 }};
		let saveBtn =  {id:"#saveBtn", listener:{event:"click", fallBack: apply2}};
		this.uiElements = {
			qrComponent: {id:"#qrImage"},
			qrHolder: {id:"#qrHolder"},
			pctgIcon,
			rdtnIcon,
			cardClients: {id:"#card_clients"},
			cdtPrctgInput,
			rdtPrctgInput,
			saveBtn,
			qrContentMessage
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

		let shareButton = document.createElement("i");
		shareButton.className = "fa fa-share-alt";

		let spanElement = document.createElement("span");
		spanElement.className = "icon";

		spanElement.appendChild(shareButton);
		if(navigator.share){
			this.uiElements.qrContentMessage.el.appendChild(spanElement);
		}

		this.uiElements.shareButton = {el:shareButton};

		let printButton = DomUtils._createAppend("span","icon")
		(DomUtils._createAppend("i","fa fa-print")())();

		this.uiElements.printButton = {el:printButton};

		this.uiElements.qrContentMessage.el.appendChild(printButton);	




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
			const urlInvitation  = `${window.location.protocol}//${window.location.hostname}/signin/${cardTemplate.value}`;
			console.log(`Invitation url : ${urlInvitation}`);

			if(this.uiElements.shareButton){
				this.uiElements.shareButton.el.addEventListener("click",()=>{
					navigator.share({
						title: 'MyCard',
						text: `Hola!, te invito a usar la tarjeta de puntos de ${this.brandName}`,
						url: urlInvitation,
					})
					.then(() => console.log('Successful share'))
					.catch((error) => console.log('Error sharing', error));
				});
			}

			this.qrcode.makeCode(urlInvitation);

			printButton.addEventListener('click', ()=>{
				this.uiElements.qrComponent.el.style['-webkit-print-color-adjust']='exact';
				let params = {logo:this.state.brand.logoURL, value:urlInvitation, color: this.state.brand.brandColor};
				DomUtils.printElem(JSON.stringify(params));
			});
		});

		this.adminClientController = new AdminClientComponent(this.uiElements.cardClients.el);
		this.adminClientController.init(brandId,1);
	}

}



