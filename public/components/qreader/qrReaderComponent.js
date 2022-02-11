import html from "./qrReaderComponent-ui.html";
import BaseComponent from "../base_component/BaseComponent.js";
import requests from "../../api/request.js"
import DomUtils from "../../utils/DomUtils.js";
import {SELECTED_BRAND} from "../../../shared/constants/constants.js";
export default class qrReaderComponent extends BaseComponent{

 constructor({container, state, callBack}) {
    super(container, html);
    this.state = state;
    this.callback = callBack;
    this.uiElements = {cardCodeInput:{id:"#cardCodeInput"}};
    this.uidFormat=15;
  }

  
  codeFound(uuid){
    this.canvas.hidden = true;
    console.log(`Found ${uuid}`);
    console.log(this.state);
    let myStorage = window.localStorage;
    let selectedCompanyStr = myStorage.getItem(SELECTED_BRAND);

    if(selectedCompanyStr){
      let selectedCompany = JSON.parse(selectedCompanyStr);
      requests.credit(selectedCompany.brandId,uuid,this.state.total,(data)=>{
        console.log("Credit gave it successfully");
        alert(`Credit: ${data.points}  gave it successfully`);
        this.callback('a');
    });
    }
    
   }

  init(){
   super.init();
   let count =  0;
   let cardCodeInput = this.uiElements.cardCodeInput.el;
   
   super.addForm("formAction",this.uiElements.cardCodeInput);

   cardCodeInput.focus();
   cardCodeInput.addEventListener('blur', e => {
      setTimeout(()=>{ this.uiElements.cardCodeInput.el.focus()}, 1);
    });
   
    cardCodeInput.addEventListener("keyup",(event)=>{
      // Number 13 is the "Enter" key on the keyboard
      if (event.keyCode === 13) {
        // Cancel the default action, if needed
        //event.preventDefault();
        
        //super.block("formAction");
        this.codeFound(cardCodeInput.value.trim());

      }
        super.clearAll("formAction");
      
    });


   var state = this.state;
   var callback = this.callback;
   var video = document.createElement("video");
   this.canvas = document.getElementById("canvas");
   let canvasElement = this.canvas;
   var loadingMessage = document.getElementById("loadingMessage");
   var outputContainer = document.getElementById("output");
   var outputMessage = document.getElementById("outputMessage");
   var outputData = document.getElementById("outputData");
   var canvas = canvasElement.getContext("2d");
   var stream;
   let that = this;

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
              that.codeFound(code.data.trim());
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

   
    
  // Use facingMode: environment to attemt to get the front camera on phones
    navigator.mediaDevices.getUserMedia({ video: { facingMode: "environment" } }).then(function(stream) {
      video.srcObject = stream;
      video.setAttribute("playsinline", true); // required to tell iOS safari we don't want fullscreen
      video.play();

      requestAnimationFrame(tick);
    });
  }

  

 
}