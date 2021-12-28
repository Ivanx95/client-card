


import { h, Component, render } from 'preact';
import htm from 'htm';



const html = htm.bind(h);


function Layout(props) {
  
  return html `<section class="section">
						  <div class="container">
							  <div class="columns">
							  	<div class="column"></div>
							  	<div class="column is-four-fifths">
								  <div class="container">
								  	<div class="hero">
								  		${props.children}
								  	</div>
					  			  </div>
						  		</div>
							  	<div class="column"></div>
							  </div>
						  </div>
					  </section>`;
}


export default {Layout: Layout}