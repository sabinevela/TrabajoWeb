import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginPacienteService } from '../../service/login-paciente.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login-pacientes',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login-pacientes.component.html',
  styleUrl: './login-pacientes.component.css'
})
export class LoginPacientesComponent {
  email: any;
  password: any;

  constructor(private servicio: LoginPacienteService, private route: Router) {}

  login() {
    const user = { email: this.email, password: this.password };
    this.servicio.postLogin(user).subscribe(acceso => {
      const token = acceso.accessToken;
      if (token) {
        localStorage.setItem("login", "true");
        this.route.navigate(['perfilPaciente']);
      }
    });
  }
}
