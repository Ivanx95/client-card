
import BaseDecorator from "./BaseDecorator.js"

export default class ActionDecorator extends BaseDecorator{

	constructor(action)
	{
		let events = [];
		const onkeyListener = (event)=>{
			if (event.keyCode === 13) {
				event.preventDefault();
				action();
			}
			return;
		}
		
		events.push({name:"keydown" ,listener:onkeyListener});
		super(events);
	}
}
