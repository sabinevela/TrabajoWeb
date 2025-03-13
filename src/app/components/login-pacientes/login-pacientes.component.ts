import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginPacienteService } from '../../service/login-paciente.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login-pacientes',
  templateUrl: './login-pacientes.component.html',
  styleUrls: ['./login-pacientes.component.css'],
  standalone: true,
  imports: [FormsModule],
})
export class LoginPacientesComponent {
  email: string = '';
  password: string = '';

  constructor(private servicio: LoginPacienteService, private route: Router) {}

  login() {
    const user = { email: this.email, password: this.password };
    this.servicio.postLogin(user).subscribe(
      (acceso) => {
        const token = acceso.accessToken;
        if (token) {
          localStorage.setItem("login", "true");
          this.route.navigate(['perfilPaciente']);
        }
      },
      (error) => console.error('Error en el login', error)
    );
  }
}


