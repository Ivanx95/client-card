import escape from "./utils/stringUtils.js";

const pattern = "${0}";

const messageEs = [
	{id:"greeting", value:"Bienvenido ${0}"}
]

function interpolate( template, data){
  let result = template.replace(pattern, data);
  return escape(result);
}

function moneyMatcher(input){
	let result = input.match(this.moneyPattern);
	return result;
}

export default {messageEs, interpolate, moneyMatcher};
