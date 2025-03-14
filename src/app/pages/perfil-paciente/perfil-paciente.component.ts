import { Component, OnInit } from '@angular/core';
import { LoginPacienteService } from '../../service/login-paciente.service';

@Component({
  selector: 'app-perfil-paciente',
  templateUrl: './perfil-paciente.component.html',
  styleUrls: ['./perfil-paciente.component.css']
})
export class PerfilPacienteComponent implements OnInit {
  paciente: any;

  constructor(private loginService: LoginPacienteService) {}

  ngOnInit(): void {
    this.getUserData();
  }

  getUserData(): void {
    const email = localStorage.getItem('email');
    if (email) {
      this.loginService.getUserDataByEmail(email).subscribe(
        (data) => {
          this.paciente = data;
        },
        (error) => {
          console.error('Error al obtener los datos del usuario', error);
        }
      );
    }
  }
}


