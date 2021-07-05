export default function getHTML(){
	return `<div class="card">
				<div class="card-image">
					<figure class="image is-4by3">
						<img src="/assets/logo.png">
					</figure>
				</div>
				<div class="card-content">
					<div class="content">
						<div class="field">
							<label class="label">Correo</label>
							<div class="control">
								<input class="input" name="email" id="emailInput" type="text" placeholder="Ingrese su correo">
							</div>
						</div>
					<div class="field">
					<label class="label">Contraseña </label>
					<div class="control"> 
						<input class="input" id="passwordInput" name="password" type="password">
					</div>
				</div>
				<div class="field is-grouped">
					 <div class="control"> 
					 	<button class="button is-link" id="loginBtn">Iniciar Sesión</button>
						<a href="/signin" class="button is-success">Registrarse</a>					 	
				 	</div>
			 	</div>
		 	</div>
	 	</div>
 	</div>`;
}