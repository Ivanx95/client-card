export default class BaseComponent{
  constructor(container, getHTML ) {
 	let content = getHTML();
	this.container = container;
	container.innerHTML = content;
  }

  init(){
	for (let key in this.uiElements) {
	  this.uiElements[key].el = this.container.querySelector(this.uiElements[key].id);
    }
  }
}