import BaseDecorator from "./BaseDecorator.js"
import InputDecorator from "./InputDecorator.js"

export default class WriteEditor{
	constructor(){
		let base =  new BaseDecorator();
		let input =  new InputDecorator();
		let normalHTML = (el, model)=>{
			el.innerHTML = model;
		};
		let inputHTML = (el, model)=>{
			el.value = model;
		};
		let chain = 
		[{predicate:base.predicate, action:normalHTML},
		{predicate:input.predicate, action:inputHTML}];

		this.chain = chain;
	}

	write(el, model){
		let last = null;
		
		for (var i = 0;  i < this.chain.length; i++) {
			let decorator = this.chain[i];
			if(decorator.predicate(el)){
				last = decorator.action;
			}
		}

		last(el,model);
	}
}
