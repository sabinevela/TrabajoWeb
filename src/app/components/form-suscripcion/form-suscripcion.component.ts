import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FirebaseService } from '../../service/firebase.service';

@Component({
  selector: 'app-form-suscripcion',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './form-suscripcion.component.html',
  styleUrls: ['./form-suscripcion.component.css']
})
export class FormSuscripcionComponent {
  nombre: string = '';
  email: string = '';
  membresia: string = 'normal';
  mensajeExito: boolean = false;

  constructor(private servicio: FirebaseService) {}

  guardar(formulario: any): void {
    const usuario = {
      nombre: this.nombre,
      email: this.email,
      membresia: this.membresia
    };
    
    this.servicio.postUsuario(usuario).subscribe(() => {
      this.mensajeExito = true;
      setTimeout(() => {
        this.mensajeExito = false;
      }, 3000);
      this.resetFormulario();
    });
  }

  resetFormulario(): void {
    this.nombre = '';
    this.email = '';
    this.membresia = 'normal';
  }

  ngOnInit(): void {
    this.servicio.getUsuario().subscribe(u => {
      console.log(u);
    });
  }
}
