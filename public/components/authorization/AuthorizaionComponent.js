
import SinglePageComponent from "../base_component/SinglePageComponent.js";
import {toggleClass} from "../../utils/cssUtils.js"
import html from "./AuthorizationComponent-ui.html"
import DomUtils from "../../utils/DomUtils.js";
import ActionDecorator from "../../decorators/ActionDecorator.js"

const FORM_NAME = "formInput";

class AuthorizaionComponent extends SinglePageComponent{

	constructor() {
		let container = document.querySelector("#mainModal");  
		super(container,html);

		this.modal  = {id:"#modalCard"};
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
		DomUtils.removeAllChildNodes(this.content.el);
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
		toggleClass(this.uiElements.modal.el,
			this.state.closed, "is-active");
		this.subController = new subController(this.content.el);

		this.subController.getFormElements(FORM_NAME)
			.forEach(el =>{
				el.decorator = {class: ActionDecorator, action:apply2};
			})

		this.subController.init();
		this.keyWord = keyWord;
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

const  modal = new AuthorizaionComponent();
modal.init();
export  {modal};