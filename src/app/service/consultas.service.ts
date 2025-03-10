import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConsultasService {
  private API_CONSULTAS ='http://localhost:3005/consultas'; 

  constructor(private http: HttpClient) {}

  postConsulta(consulta: any): Observable<any> {
    return this.http.post(this.API_CONSULTAS, consulta);
  }

  getConsulta(): Observable<any> {
    return this.http.get(this.API_CONSULTAS);
  }

  deleteConsulta(id: any): Observable<any> {
    return this.http.delete(`${this.API_CONSULTAS}/${id}`);
  }

  getConsultaById(id: any): Observable<any> {
    return this.http.get(`${this.API_CONSULTAS}/${id}`);
  }
}

