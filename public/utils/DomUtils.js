import curry from "/shared/Curryng.mjs";

//ui-form utils

/**
 * [configurePasswordInput description]
 * @param  {HTMLElement} component [inputElement]
 * @param  {HTMLElement} container [parent element]
 */
function configurePasswordInput(component, container) {
    let divContainers =  [...container.querySelectorAll(`[is-password=true]`)];
    const parentContainer = divContainers.filter((el)=>{
    	console.log(el);
    	for(let i = 0; i < el.childNodes.length; i++){
    		let children = el.childNodes[i];
    		if( children === component){
    			return true;
    		}
    	}
    })[0];

    
    let iconBtn =  parentContainer.querySelectorAll("a")[0];
    let icon =  iconBtn.querySelectorAll("i")[0];
    let iconStore = true;
    iconBtn.addEventListener("click",()=>{
    	if(iconStore){
	    	icon.className = "fas fa-eye";
	    	component.type="text";	
    	}else{
    		icon.className = "fas fa-eye-slash";
    		component.type="password";
    	}
    	iconStore^=true;
    })

}
/**
 * [Remove all children from node]
 * @param  {[type]} parent [description]
 * @return {[type]}        [description]
 */
function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

/**
 * [Remove all children from node]
 * @param  {[type]} parent [description]
 * @return {[type]}        [description]
 */
function addEnterHandler(el, callBack, cancelDefault) {
    el.addEventListener("keyup",(event)=>{
      // Number 13 is the "Enter" key on the keyboard
      if (event.keyCode === 13) {
        // Cancel the default action, if needed
        if(cancelDefault){
        	event.preventDefault();
        }
        // Trigger the button element with a click
        callBack.call();
      }
    });
}


const _createAppend = curry(createAppend);

function createRows(rows){
	let htmlRows = [];
	for(var i = 0; i< rows.length; i++){
		let row = createAppend("tr",null);
		for (let key in rows[i]) {
			let col = createAppend("th",null,create("abbr",null, rows[i][key]));
			row.appendChild(col);
		}
		
		htmlRows.push(row);
	}
	return htmlRows;
}

function createTable(columns){
	
	
	const _tEl =(el)=>{
		let _t = _createAppend(el,null);
		let theadResult = null;
		for(var i = 0; i< columns.length; i++){
		    if(!theadResult){
		      theadResult = _t(createAppend("th",null,create("abbr",null, columns[i])));
		    }else{
		      theadResult = theadResult(createAppend("th",null,create("abbr",null, columns[i])))
		    }  
		}
		return theadResult;
	}

	let _tBody = createAppend("tbody",null);
	let result = _createAppend("table","table is-hoverable")(_tEl("thead")())(_tBody)();
	result._tBody = _tBody;
	return result;
}



function createAppend(tagName, className,...args){
  let el  =  document.createElement(tagName);
  if(className&&className!=null){
  	el.className= className;	
  }
  args.forEach((i)=>el.appendChild(i));
  return   el;
}


function create(tagName, className, content){
	let div  =  document.createElement("div");
	className=className&&className!=null?`class="${className}"`:"";
	div.innerHTML = `<${tagName} ${className} ">${content}</${tagName}>`;
	return  div.firstChild;
}


function createP(className, content){
	return  create("p",className,content);
}


function fileNameLabel( content){
	return  create("p","file-name",content);
}

function toggleElement (p, flag, el){
	  	if(flag){
	  		el.appendChild(p);
	  	}else{
			el.removeChild(p);
	  	}
}

function printElem(values){
    let mywindow = window.open('assets/qr.html#'+values, 'PRINT', 'height=400,width=600');
	mywindow.focus(); // necessary for IE >= 10*/
	
	//mywindow.onfocus=function(){ mywindow.close();}
    
    return true;
}

const DomUtils = {};

DomUtils.removeAllChildNodes = removeAllChildNodes;
DomUtils.create = create;
DomUtils.createP = createP;
DomUtils.toggleElement = toggleElement;
DomUtils.createFileNameLabel = fileNameLabel;
DomUtils.createTable = createTable;
DomUtils.createRows = createRows;
DomUtils.createAppend = createAppend;
DomUtils._createAppend = _createAppend;
DomUtils.configurePasswordInput = configurePasswordInput;
DomUtils.addEnterHandler = addEnterHandler;
DomUtils.printElem = printElem;

export default DomUtils;