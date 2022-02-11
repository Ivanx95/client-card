function html(){

	return 	`<div class="card">
		<div class="card-image">
			<figure class="image is-4by3">
				<picture>
				  <img
					 decoding="async" loading="lazy"
					src="/assets/logo.avif" alt="Logo Image" />
			    </picture>
			</figure>
		</div>
		<div class="card-content">
			<div class="content">
				<h1 class="title">Iniciar sesión</h1>
				<div class="field" for="emailInput">
					<label class="label" for="emailInput">Usuario</label>
					<div class="control">
						<input autofocus=true class="input"  name="email" id="emailInput" type="text" placeholder="Ingrese su usuario">
					</div>
				</div>
				<div class="field">
					<label class="label" for="passwordInput">Contraseña </label>
					<div  is-password=true class="control has-icons-right"> 
						<input class="input" id="passwordInput" name="password" type="password">
						<a>
							<span class="icon is-small is-right is-clickable">
								<i class="fas fa-eye-slash"></i>
							</span>
						</a>
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
	</div>`
}

export default html;