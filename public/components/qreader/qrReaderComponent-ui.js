export default function getHTML(){
	return `<section class="section">
				<div class="container is-widescreen">
					<canvas id="canvas" hidden/>
				</div>
				<div id="output" hidden>
					<div id="outputMessage">No QR code detected.</div>
					<div hidden>
						<b>Data:</b><span id="outputData"></span>
					</div>
				</div>
			</section>`;
}