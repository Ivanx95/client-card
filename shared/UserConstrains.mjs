const UserConstrains = {

  email: (user)=>{
          if(!user.email)
              return {typeOfError:"email", 
                      errorMessage: "Ingrese su correo"}},

  password: (user)=>{
          if(!user.password)
              return {typeOfError:"password", 
                      errorMessage: "Ingrese su contraseña"}
                       
  },
  name: (user)=>{
          if(!user.name)
              return {typeOfError:"name", 
                      errorMessage: "Ingrese su Nombre"}
                       
  },
  typeOfUser: (user)=>{
          if(!user.typeOfUser)
              return {typeOfError:"typeOfUser", 
                      errorMessage: "Seleccione el tipo de usuario"}
  }
}

export default UserConstrains;