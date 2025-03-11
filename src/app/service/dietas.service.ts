import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DietasService {
  private API_DIETAS ='http://localhost:3001/dietas'; 

  constructor(private http: HttpClient) {}

  postDieta(dieta: any): Observable<any> {
    return this.http.post(this.API_DIETAS, dieta);
  }

  getDieta(): Observable<any> {
    return this.http.get(this.API_DIETAS);
  }

  deleteDieta(id: any): Observable<any> {
    return this.http.delete(`${this.API_DIETAS}/${id}`);
  }

  getDietaById(id: any): Observable<any> {
    return this.http.get(`${this.API_DIETAS}/${id}`);
  }

  putDieta(dieta: any): Observable<any> {
    return this.http.put(`${this.API_DIETAS}/${dieta.id}`, dieta);
  }
}

