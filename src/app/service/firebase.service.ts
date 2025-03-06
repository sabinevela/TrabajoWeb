import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  private API_FIRE = "https://app-nutrirecetas-default-rtdb.firebaseio.com/usuarios.json";

  constructor(private http: HttpClient) { }

  postUsuario(usuario: any): Observable<any> {
    return this.http.post(this.API_FIRE, usuario);
  }

  getUsuario(): Observable<any> {
    return this.http.get(this.API_FIRE);
  }
}


