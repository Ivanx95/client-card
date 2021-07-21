const loading = "is-loading";
const danger = "is-danger";
function toggleClass (el, flag, newClass){
	let className = el.className;
	  	if(flag){
	  		el.className = className.concat(" "+newClass);
	  	}else{
			el.className = className.replace(newClass,"");
	  	}
}
export {loading,danger,toggleClass};