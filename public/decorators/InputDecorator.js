
import BaseDecorator from "./BaseDecorator.js"
export default class InputDecorator extends BaseDecorator{

	constructor(events)
	{
		super(events);
	}

	/**
	 * [predicate description]
	 * @param  {[type]} obj [description]
	 * @return {[type]}     [description]
	 */
	 predicate(obj){
	 	var tagName = obj.tagName.toLowerCase();
	 	let isInput	=  tagName == "input";
	 	return super.predicate(obj) && isInput;
	 }
	}
