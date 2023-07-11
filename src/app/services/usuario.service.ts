import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Usuario } from '../interfaces/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  servidor = 'http://localhost:8080/api';
  constructor(private servicio: HttpClient) { }

  // getClientes(): Observable<any> {
  //   return this.servicio.get(`${this.servidor}/clientes`);
  // }

  loginUser(usuario: Usuario) {
    return this.servicio.post<Usuario>(`${this.servidor}/login`, usuario);
  }
}
