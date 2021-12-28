
import qrReaderComponent from "../qreader/qrReaderComponent.js"
import requests from "../../api/request.js"
import {AlertModal} from '../authorization/AlertComponent.js';
import { h, Component, render } from 'preact';
import htm from 'htm';

const html = htm.bind(h);

export default class RedeemQRReaderComponent extends qrReaderComponent{


 constructor(container, state, callBack) {
    super(container, state, callBack);
    
  }

 codeFound(uuid){
    this.canvas.hidden = true;
    
    

    console.log(`Found ${uuid}`);
    console.log(this.state);
    let operatorId = window.localStorage.getItem("userId");
    requests.calculateRedeem
 	requests.calculateRedeem(operatorId,uuid,(data)=>{
        render(html `<p>El cliente tiene un total de $${data.total} descuento</p>`,AlertModal.getContent());
        AlertModal.show(()=>{
			requests.redeem(operatorId,uuid,(response)=>{
				console.log(response);
				AlertModal.hide();
			});
		});
    });
    
 }
    

}