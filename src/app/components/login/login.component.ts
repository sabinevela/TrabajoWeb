import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LoginService } from '../../service/login.service';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterModule, HttpClientModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  private perfiles: { [key: string]: string } = {
    'juanperez@gmail.com': 'perfilNutri',
    'analopez@gmail.com': 'analopez',
    'carlosramirez@gmail.com': 'carlos',
    'sofiamendez@gmail.com': 'sofia',
    'javiertorres@gmail.com': 'javier'
  };

  constructor(private servicio: LoginService, private route: Router) {}

  login() {
    const user = { email: this.email, password: this.password };
    this.servicio.postLogin(user).subscribe(acceso => {
      const token = acceso.accessToken;
      if (token) {
        localStorage.setItem("login", "true");
        const perfil = this.perfiles[this.email];
        if (perfil) {
          this.route.navigate([perfil]);
        } else {
          alert('Perfil no encontrado');
        }
      }
    }, error => {
      alert('Credenciales incorrectas');
    });
  }
}

