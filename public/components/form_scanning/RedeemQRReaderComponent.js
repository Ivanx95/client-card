
import qrReaderComponent from "../qreader/qrReaderComponent.js"
import requests from "../../api/request.js"
import {AlertModal} from '../authorization/AlertComponent.js';
import { h, Component, render } from 'preact';
import htm from 'htm';

import BadRequestError from "../../../shared/errors/BadRequestError.js";
import {SELECTED_BRAND} from "../../../shared/constants/constants.js";

const html = htm.bind(h);

export default class RedeemQRReaderComponent extends qrReaderComponent{


 constructor(container, state, callBack) {
    super(container, state, callBack);
    
  }

 codeFound(uuid){
    this.canvas.hidden = true;
    console.log(`Found ${uuid}`);
    console.log(this.state);
    let myStorage = window.localStorage;
    let selectedCompanyStr = myStorage.getItem(SELECTED_BRAND);

    if(!selectedCompanyStr){
        alert("Por favor seleccione una compañia")
        return;  
    }

    let selectedCompany = JSON.parse(selectedCompanyStr);
    
    requests.calculateRedeem(selectedCompany.brandId,uuid,(data)=>{
        render(html `<p>El cliente tiene un total de $${data.total} descuento</p>`,AlertModal.getContent());
        AlertModal.show(()=>{
			requests.redeem(selectedCompany.brandId,uuid,(response)=>{
				console.log(response);
				AlertModal.hide();
			});
		});
    }, (e)=>{

        let formError = {typeOfError:"cardCodeInput"};
        formError.errorMessage="Error general intente más tarde";

        if(e instanceof BadRequestError){
            if(e.response.status==400){
                formError.errorMessage="Código no válido"
            }
        }
        this.uiElements.cardCodeInput.el.focus();
        this.uiElements.cardCodeInput.el.select();
        super.invalidate([formError]);
        //super.unblock("formAction");
    });
    
 }
    

}