
const data = {code: 0, datas: null, message: "Code invalid!"}
let datosApi: {[key: string]: any} = {data};

for(let i in datosApi){
    for(let d in datosApi[i]){
     if(datosApi[i][d]== "Code invalid!"){
        console.log("Inicio de sesion exitoso")
     }else{
        console.error("Error en la sesion")
     }
    }
}

/*
iniciarSesion(form: FormGroup){
    if(this.myFormLogin.valid){ // Login exitoso 18/07/2023".
      
        this.serviceUsuario.loginUser(form.value).subscribe(data =>{ 
          let datosApi: {[key: string]: any} = {data};
         //console.log("Datos new variable de daos APi", datosApi)
          /////
          for(let i in datosApi){
            for(let d in datosApi[i]){
             if(datosApi[i][d]== "Acceso denegado"){
                console.error("Error en la sesion")
              }else if(datosApi[i][d] == "Acceso concedido"){
                console.log("Inicio de sesion exitoso")
             }
            }
            break
          }
         
        })
    }
    
  }
*/


