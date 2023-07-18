import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UsuarioService } from '../services/usuario.service';
import { TokenStorageService } from '../services/token-storage.service';
import { Location } from '@angular/common';
import { Router, RouterLink } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: any = {
    username: null,
    password: null
  };
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  dsroles: string[] = [];

  constructor(private authService: UsuarioService, private tokenStorage: TokenStorageService, private router:Router) { }

  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.dsroles = this.tokenStorage.getUser().dsroles;
    }
  }

  onSubmit(): void {
    const { username, password } = this.form;

    this.authService.login(username, password).subscribe(
      data => {
        this.tokenStorage.saveToken(data.accessToken);
        this.tokenStorage.saveUser(data);

        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.dsroles = this.tokenStorage.getUser().dsroles;
        //this.reloadPage();
        let datosApi: {[key: string]: any} = {data};
        for(let i in datosApi){
          for(let d in datosApi[i]){
           if(datosApi[i][d]== "Acceso denegado"){
              console.error("Error en la sesion")
              this.isLoginFailed = false;
              this.errorMessage = "Inicio de sesion fallido"
            }else if(datosApi[i][d] == "Acceso concedido"){
              console.log("Inicio de sesion exitoso")
              this.router.navigate(["/administrador"])
           }
          }
          break
        }
      },
      err => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      }
    );
   /* let datosApi: {[key: string]: any} = {data};
          for(let i in datosApi){
            for(let d in datosApi[i]){
             if(datosApi[i][d]== "Acceso denegado"){
                console.error("Error en la sesion")
              }else if(datosApi[i][d] == "Acceso concedido"){
                console.log("Inicio de sesion exitoso")
             }
            }
            break
          }*/
  }

  reloadPage(): void {
    window.location.reload();
  }
  }

  