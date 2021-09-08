
import {consoleStyle} from "./cssUtils.js";

const Konsole = {
	 log: function(data){
		console.log('%c'+data, consoleStyle.default);
	}
}
export  default Konsole; 

