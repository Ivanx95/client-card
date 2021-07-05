function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

function create(tagName, className, content){
	let div  =  document.createElement("div");
	div.innerHTML = `<${tagName} class="${className}">${content}</${tagName}>`;
	return  div.firstChild;
}

function createP(className, content){
	return  create("p",className,content);
}

function toggleElement (p, flag, el){
	
	  	if(flag){
	  		el.appendChild(p);
	  	}else{
			el.removeChild(p);
	  	}
}
const DomUtils = {};

DomUtils.removeAllChildNodes=removeAllChildNodes;
DomUtils.create=create;
DomUtils.createP=createP;
DomUtils.toggleElement=toggleElement;

export default DomUtils;