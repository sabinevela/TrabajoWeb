import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RecetaService {
  private API_RECETAS = 'http://localhost:3000/recetas';

  constructor(private http: HttpClient) {}

  postRecetas(receta: any): Observable<any> {
    return this.http.post(this.API_RECETAS, receta);
  }

  getRecetas(): Observable<any> {
    return this.http.get(this.API_RECETAS);
  }

  deleteRecetas(id: any): Observable<any> {
    return this.http.delete(`${this.API_RECETAS}/${id}`);
  }

  getRecetasById(id: any): Observable<any> {
    return this.http.get(`${this.API_RECETAS}/${id}`);
  }

  putRecetas(receta: any): Observable<any> {
    return this.http.put(`${this.API_RECETAS}/${receta.id}`, receta);
  }
}
