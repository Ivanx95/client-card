const loading = "is-loading";
const danger = "is-danger";
const consoleStyle =
 {
 	default:"color:#2c7800;font-family:system-ui;font-size:1rem;"
 }
function toggleClass (el, flag, newClass){
	let className = el.className;
	  	if(flag){
	  		el.className = className.concat(" "+newClass);
	  	}else{
			el.className = className.replace(newClass,"");
	  	}
}
export {loading,danger,toggleClass, consoleStyle};