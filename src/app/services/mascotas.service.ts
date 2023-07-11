import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Mascotas } from '../interfaces/mascotas';

@Injectable({
  providedIn: 'root'
})
export class MascotasService {
  servidor = 'http://localhost:8080/api';
  constructor(private servicio: HttpClient) { }

  getMascotas(): Observable<any> {
    return this.servicio.get(`${this.servidor}/mascotas`);
  }

  // createMascotas(mascotas: Mascotas) {
  //   return this.servicio.post<Mascotas>(`${this.servidor}/mascotas`, mascotas);
  // }

  edit(mascotas: Mascotas) {
    return this.servicio.put<Mascotas>(`${this.servidor}/mascotas/`, mascotas.nmid);
  }

  updateMascotas(mascotas: Mascotas) {
    return this.servicio.put<Mascotas>(`${this.servidor}/mascotas`, mascotas);
  }
  
  getMascotasByCliente(nmcliente: number): Observable<any>{
    return this.servicio.get<Mascotas>(`${this.servidor}/mascotas/${nmcliente}`);
  }
  // getMascotasByCliente(nmcliente: number): Observable<any>{
  //   return this.servicio.get<Mascotas>(`${this.servidor}/mascotas/${nmcliente}`);
  // }
  
  deleteMascotaById(nmmascota: number){
    return this.servicio.delete<Mascotas>(`${this.servidor}/cliente-mascota/${nmmascota}`);
  }  
  /*
  deleteMascota(mascotas: Mascotas){
    return this.servicio.delete<Mascotas>(`${this.servidor}/cliente-mascota/${mascotas.nmid}`);
  }}*/

}
