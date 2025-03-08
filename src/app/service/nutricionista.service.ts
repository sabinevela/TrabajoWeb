import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NutricionistaService {

  constructor(private http: HttpClient) { }
  private API_NUTRICIONISTAS = 'http://localhost:3000/nutricionistas'
  // metodo para agregar nutricionistas
  postNutricionista(nutricionista:any):Observable<any>{
    return this.http.post(this.API_NUTRICIONISTAS, nutricionista);
  }
  //Metodo para ver todas las recetas
  getReceta(): Observable<any> {
    return this.http.get(this.API_NUTRICIONISTAS);
  }
   // Método para eliminar receta
   deleteReceta(id: any): Observable<any> {
    return this.http.delete(`${this.API_NUTRICIONISTAS}/${id}`);
  }
  //metodo para obtener recetas por id
  getNutricionistaById(id:any): Observable<any>{
    return this.http.get(`${this.API_NUTRICIONISTAS}/${id}`);
  }
  // metodo para editar nutricionista
  putNutricionista(nutricionista:any):Observable<any>{
return this.http.put(`${this.API_NUTRICIONISTAS}/${nutricionista.id}`, nutricionista);
  

  }
}
