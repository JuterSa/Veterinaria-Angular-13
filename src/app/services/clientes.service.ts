import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Clientes } from '../interfaces/clientes';
import { Mascotas } from '../interfaces/mascotas';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  servidor = 'http://localhost:8080/api';
  constructor(private servicio: HttpClient) { }

  getClientes(): Observable<any> {
    return this.servicio.get(`${this.servidor}/clientes`);
  }

  createClientes(clientes: Clientes) {
    return this.servicio.post<Clientes>(`${this.servidor}/clientes`, clientes);
  }

  edit(clientes: Clientes) {
    return this.servicio.put<Clientes>(`${this.servidor}/clientes/`, clientes.nmid);
  }

  updateClientes(clientes: Clientes) {
    return this.servicio.put<Clientes>(`${this.servidor}/clientes`, clientes);
  }

  getMascotasByCliente(nmcliente: number): Observable<any>{
    return this.servicio.get<Mascotas>(`${this.servidor}/mascotas/${nmcliente}`);
  }
  
  /*deleteClientes(nmcliente: number): Observable<any>{
    return this.servicio.delete<Clientes>(`${this.servidor}/clientes/${nmcliente}`);
  }*/
  deleteClientes(cliente: Clientes){
    return this.servicio.delete<Clientes>(`${this.servidor}/clientes/${cliente.nmid}`);
  }

  createMascotas(mascotas: Mascotas) {
    return this.servicio.post<Mascotas>(`${this.servidor}/mascotas`, mascotas);
  }
  
}
