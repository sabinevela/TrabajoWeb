import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecetasService {

  constructor(private http: HttpClient) { }
  private API_RECETAS = 'http://localhost:3004/recetas';

  // Método para enviar receta
  postReceta(receta: any): Observable<any> {
    return this.http.post(this.API_RECETAS, receta);
  }

  // Método para ver todas las recetas
  getReceta(): Observable<any> {
    return this.http.get(this.API_RECETAS);
  }

  // Método para eliminar receta
  deleteReceta(id: any): Observable<any> {
    return this.http.delete(`${this.API_RECETAS}/${id}`);
  }

  // Método para obtener receta por ID
  getRecetaById(id: any): Observable<any> {
    return this.http.get(`${this.API_RECETAS}/${id}`);
  }

  // Método para editar receta
  putReceta(receta: any): Observable<any> {
    return this.http.put(`${this.API_RECETAS}/${receta.id}`, receta);
  }

}
