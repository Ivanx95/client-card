export default function getHTML(){
	return `<div class="card">
				<div class="card-content">
					<div class="content">
							<h1 class="title">Crear cuenta</h1>
							<div class="field" for="nameInput">
								<label class="label">Nombre</label>
								<div class="control">
									<input autocomplete="off" required class="input" name="name" id="nameInput" type="text" placeholder="Ingrese su nombre">
								</div>
							</div>
							<div class="field" for="emailInput">
								<label class="label">Correo</label>
								<div class="control">
									<input autocomplete="off" required class="input" name="email" id="emailInput" type="text" placeholder="Ingrese su correo">
								</div>
							</div>
							<div class="field" for="passwordInput">
								<label class="label">Contraseña </label>
								<div class="control"> 
									<input autocomplete="off" required class="input" id="passwordInput" name="password" type="password">
								</div>
							</div>
							<div class="field">
								<label class="label">Tipo de usuario</label>
								<div class="select">
								  <select id="typeOfUserSelect" name="typeOfUser">
								    <option value="CLIENT">Soy cliente</option>
								    <option value="BUSINESS">soy dueño de un negocio</option>
								  </select>
								</div>
							</div>
							<div class="field is-grouped">
								 <div class="control"> 
								 	<button class="button is-link" id="signInBtn">Registrarse</button>
								 	
							 	</div>
						 	</div>
				 	</div>
			 	</div>
		 	</div>`;
}