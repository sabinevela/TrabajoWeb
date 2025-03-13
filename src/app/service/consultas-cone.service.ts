import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConsultasConeService {

  private apiUrl = "http://localhost:8080/consultas";

  constructor(private http: HttpClient) { }

  getConsultas(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/mostrarConsulta`);
  }

  deleteConsultas(id: number): Observable<boolean> {
    return this.http.delete<boolean>(`${this.apiUrl}/eliminarConsulta/${id}`);
  }

  updateConsultas(id: number, consulta: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/actualizarConsulta/${id}`, consulta);
  }
  

  postConsultas(consulta: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/guardarConsulta`, consulta);
  }
}
