
export default class BaseDecorator{

	constructor(events=[])
	{
		this.events =events;
	}

	/**
	 * [predicate description]
	 * @param  {[type]} obj [description]
	 * @return {[type]}     [description]
	 */
	 predicate(obj){
	 	let isHTML =  obj instanceof HTMLElement;
	 	return isHTML;
	 }

	/**
	 * [decorate description]
	 * @param  {[type]} element [description]
	 * @return {[type]}             [description]
	 */
	 decorate(element){

	 	for (let key in this.events) {
	 		let event = this.events[key];
	 		element.addEventListener(event.name,event.listener, false);	
	 	}

	 	console.log(`Decorating element; ${element}`);
	 }

	}
