
import SinglePageComponent from "../base_component/SinglePageComponent.js";
import {toggleClass} from "../../utils/cssUtils.js"
import html from "./AuthorizationComponent-ui.html"
import DomUtils from "../../utils/DomUtils.js";
import ActionDecorator from "../../decorators/ActionDecorator.js"

const FORM_NAME = "formInput";

class AlertComponent extends SinglePageComponent{

	constructor() {
		let container = document.querySelector("#modal");  
		super(container,html);

		this.modal  = {id:"#modalCard"};
		this.cancelButton =  {id:"#cancelBtn"};
		this.acceptBtn  ={id:"#acceptBtn"};
		this.closeBtn  ={id:"#closeBtn"};
		this.content = {id:"#content"};
		let card = container.querySelector(".modal-card");  

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

		let closeFunction = function(e) {
  	 		if (e.key === "Escape") {
    			this.hide();
  			} 
  		}

		let closeFunctionBind = closeFunction.bind(this);

  		card.onkeyup = closeFunctionBind;
  		this.card = card;
	}

	clearContent(){
		this.callBack = null;
		DomUtils.removeAllChildNodes(this.content.el);
	}

	getContent(){
		return this.content.el;
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
		this.callBack();
		this.hide();
	}

	show(callBack){

		const apply2 = this.apply.bind(this);
		this.state.closed=true;
		toggleClass(this.uiElements.modal.el,
			this.state.closed, "is-active");
		this.card.focus();
		this.callBack = callBack;
	}

	hide(){
		this.state.closed=false;
		toggleClass(this.uiElements.modal.el,
			this.state.closed, "is-active");
	}

	setContent(el){
		this.content.el.appendChild(el);
	}
}

const  AlertModal = new AlertComponent();
AlertModal.init();
export  {AlertModal};