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

function addclass(el, newClass) {
	let className = el.className;
	if(!className.includes(newClass)){
		el.className = className.concat(" "+newClass);
	}
}



function hexToRgb(hex) {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null;
}

function standText(color, item, content){
	let style = document.createElement('style');
	style.type = 'text/css';
	let {r, g, b }= hexToRgb(color);
	

	style.innerHTML = 
	`
	/*
	The challenge: 
	1) Set text to either black or white depending on the element background perceived lightness (luma)
	2) Set a border as a darker variation of the base color to improve button visibility, ONLY if background luma is really high
	3) Automatically generate a secondary, 60º rotated hue color
	*/

	:root {
		/* theme color variables to use in RGB declarations */
		--red: ${r};
		--green: ${g};
		--blue: ${b};
		/*the threshold at which colors are considered "light". 
		Range: decimals from 0 to 1,
		recommended 0.5 - 0.6*/
		--threshold: 0.5;
		/*the threshold at which a darker border will be applied.
		Range: decimals from 0 to 1,
		recommended 0.8+*/
		--border-threshold: 0.8;
	}

	${item} {
		/*sets the background for the base class*/
		background: rgb(var(--red), var(--green), var(--blue)) !important;

		/* 
		Calcs perceived brightness using the 
		sRGB Luma method
		lightness = (red * 0.2126 + green * 0.7152 + blue * 0.0722) / 255
		*/
		--r: calc(var(--red) * 0.2126);
		--g: calc(var(--green) * 0.7152);
		--b: calc(var(--blue) * 0.0722);
		--sum: calc(var(--r) + var(--g) + var(--b));

		--perceived-lightness: calc(var(--sum) / 255);

		/*
		1) Any lightness value above the threshold will be considered "light", therefore apply a black text color. Any bellow will be considered dark, and use white color. 
		This results from appying either a sub-zero (negative) or a higher-than-100 lightness value, which are capped to 0 and 100 respectively, to a HSL declaration
		*/



		/*
		2) sets the border as a 50% darker shade of the base color, ONLY if background color luma is higher than the border threshold.
		To achieve this I use the same sub-zero or higher-than-max technique, only this time using the Alpha value from an RGBA declaration. 
		This results in a border that's either fully transparent or fully opaque
		*/
		--border-alpha: calc((var(--perceived-lightness) - var(--border-threshold)) * 100);

		border-width: .2em;
		border-style: solid;
		border-color: rgba(calc(var(--red) - 50), calc(var(--green) - 50), calc(var(--blue) - 50), var(--border-alpha));
	}


	${content} {
		color:green  !important;

		color: hsl(0, 0%, calc((var(--perceived-lightness) - var(--threshold)) * -10000000%)) !important;
	}
	`;
	document.getElementsByTagName('head')[0].appendChild(style);
	}

	
export {loading,danger,toggleClass, addclass, consoleStyle, standText};
