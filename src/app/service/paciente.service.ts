import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PacienteService {

 constructor(private http: HttpClient) { }
   private API_PACIENTES = 'http://localhost:3000/pacientes'
   // metodo para agregar nutricionistas
   postPaciente(paciente:any):Observable<any>{
     return this.http.post(this.API_PACIENTES, paciente);
   }
   //Metodo para ver todas las recetas
   getPaciente(): Observable<any> {
     return this.http.get(this.API_PACIENTES);
   }
    // Método para eliminar receta
    deletePaciente(id: any): Observable<any> {
     return this.http.delete(`${this.API_PACIENTES}/${id}`);
   }
   //metodo para obtener recetas por id
   getPacienteById(id:any): Observable<any>{
     return this.http.get(`${this.API_PACIENTES}/${id}`);
   }
   // metodo para editar nutricionista
   putPaciente(paciente:any):Observable<any>{
 return this.http.put(`${this.API_PACIENTES}/${paciente.id}`, paciente);
   
 
   }
 }
 
 