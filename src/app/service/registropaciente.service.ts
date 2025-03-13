import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegistroPacienteService {
  private APIREGISTER = 'http://localhost:3000/users';

  constructor(private http: HttpClient) {}

  postRegistro(paciente: any): Observable<any> {
    return this.http.post<any>(this.APIREGISTER, paciente);
  }
}

