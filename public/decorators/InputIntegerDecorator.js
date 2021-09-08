
import InputDecorator from "./InputDecorator.js";

export default class InputIntegerDecorator extends InputDecorator{

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
