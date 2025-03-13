import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RegistroPacienteService } from '../../service/registropaciente.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-inicio-pacientes',
  templateUrl: './inicio-pacientes.component.html',
  styleUrls: ['./inicio-pacientes.component.css'],
  standalone: true,
  imports: [FormsModule],
})
export class InicioPacientesComponent {
  nombre: string = '';
  email: string = '';
  password: string = '';

  constructor(private servicio: RegistroPacienteService, private route: Router) {}

  register() {
    if (this.email && this.password) {
      const user = { nombre: this.nombre, email: this.email, password: this.password };
      this.servicio.postRegistro(user).subscribe(
        (acceso) => {
          const token = acceso.accessToken;
          if (token) {
            localStorage.setItem('register', 'true');
            this.route.navigate(['sesionPaciente']);
          }
        },
        (error) => console.error('Error en el registro', error)
      );
    }
  }
}





