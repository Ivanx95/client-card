import { h, Component, render } from 'preact';
import htm from 'htm';
const html = htm.bind(h);
export default class PaginationComponent extends Component {



  constructor(props) {
    super(props);
    this.state = {  currentPage: props.current, 
    				pageSize:props.pageSize, 
    				totalPages: Math.ceil(props.total/props.pageSize) };
  }

  createStep(index){
  	return html`<a class="pagination-link" 
									aria-label="Goto page ${index}"
									onclick="${()=>this.props.go(index)}">
										${index}
								</a>`	
  }
  render() {

  	let beforeCurrent; 
  	let afterCurrent;
  	let current = html`<a class="pagination-link is-current" aria-label="Goto page ${this.state.currentPage}">${this.state.currentPage}</a>`;
  	let first = this.createStep(1);
  	let last = this.createStep(this.state.totalPages);

  	let paginationIndex = [];
  	if(this.state.currentPage == 1){
  		paginationIndex.push(current);
  	}else{
  		paginationIndex.push(first);
  	}

  	let before = parseInt(this.state.currentPage)-1;
  	if(before > 1){
		let beforeCurrent = this.createStep(before);
		paginationIndex.push(beforeCurrent);
  	}

	if(this.state.currentPage != 1){
  		paginationIndex.push(current);
  	}

  	let next = parseInt(this.state.currentPage)+1;

  	if(next < this.state.totalPages){
		let afterCurrent = this.createStep(next);
		paginationIndex.push(afterCurrent);
  	}

	if(this.state.currentPage !== this.state.totalPages && this.state.totalPages != 0){
  		paginationIndex.push(last);
  	}

    return (			
      html `<nav class="pagination" role="navigation" aria-label="pagination">
								  <ul class="pagination-list">
						    		<li>
						    			${this.props.children}
						      			${paginationIndex}
						    		</li>
								  </ul>
								</nav>`
    );
  }

}