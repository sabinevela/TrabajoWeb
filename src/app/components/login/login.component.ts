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
  email: any;
  password: any;

  constructor(private servicio: LoginService, private route: Router) {}

  login() {
    const user = { email: this.email, password: this.password };
    this.servicio.postLogin(user).subscribe(acceso => {
      const token = acceso.accessToken;
      if (token) {
        localStorage.setItem("login", "true");
        this.route.navigate(['perfilNutri']);
      }
    });
  }
}
