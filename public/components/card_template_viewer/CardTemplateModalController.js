
import BaseComponent from "../base_component/BaseComponent.js";
import html from "./CardTemplateModal-ui.html";

export default class CardTemplateModalController extends BaseComponent{

	constructor(container) {
		super(container, html);
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