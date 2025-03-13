import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecetaSServiceService {
  private apiUrl = "http://localhost:8080/recetas";

  constructor(private http: HttpClient) { }

  getRecetas(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/mostrar`);
  }

  deleteRecetas(id: number): Observable<boolean> {
    return this.http.delete<boolean>(`${this.apiUrl}/eliminar/${id}`);
  }

  updateRecetas(id: number, receta: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/recetas/actualizar/${id}`, receta);
}


  postRecetas(receta: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/guardar`, receta);
  }
}
