import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_CONFIG } from '../config/api.config';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  private API = API_CONFIG.url + '/api/productos';

  constructor(private http: HttpClient) {}

  listar(): Observable<any[]> {
    return this.http.get<any[]>(this.API);
  }

  crear(producto:any){
    return this.http.post(this.API, producto);
  }
  actualizar(id:number, producto:any){
  return this.http.put(`${this.API}/${id}`, producto);
  }

  eliminar(id:number){
    return this.http.delete(`${this.API}/${id}`);
  }

  buscar(texto:string){
  return this.http.get<any[]>(`${this.API}/buscar?texto=${texto}`);
  }

}
