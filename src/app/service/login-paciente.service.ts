import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginPacienteService {
  
  private API_LOGIN = 'http://localhost:3000/login';
  
  constructor(private http: HttpClient) {}
  
  getLogin(): Observable<any> {
    return this.http.get(this.API_LOGIN);
  }
  
  postLogin(usuario: any): Observable<any> {
    return this.http.post(this.API_LOGIN, usuario);
  }
  
  getUserDataByEmail(email: string): Observable<any> {
    return this.http.get<any[]>(`http://localhost:3000/users?email=${email}`).pipe(
      map((response: any[]) => {
        if (response && response.length > 0) {
          return response[0];
        }
        return null;
      })
    );
  }
}


