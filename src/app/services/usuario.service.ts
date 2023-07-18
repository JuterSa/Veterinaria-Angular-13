import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Usuario } from '../interfaces/usuario';
import { Observable } from 'rxjs';




@Injectable({
  providedIn: 'root'
})


export class UsuarioService {

  constructor(private servicio: HttpClient) { }
  servidor = 'http://localhost:8080/api';
  login(username: string, password: string): Observable<any> {
    return this.servicio.post(`${this.servidor}/login/${username}/${password}`, UsuarioService);
  }

  register(username: string, email: string, password: string): Observable<any> {
    return this.servicio.post(this.servidor + 'signup', {
      username,
      email,
      password
    });
  }
  loginUser(usuario: Usuario){
    console.log("Usuario:" , usuario)
    return this.servicio.post<Usuario>(`${this.servidor}/login/${usuario.dscorreo}/${usuario.dscontraseña}`,usuario);
  }
}
