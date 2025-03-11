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
  mostrarFactura: boolean = false;
  factura: any = {};

  constructor(private servicio: FirebaseService) {}

  resetFormulario(): void {
    this.nombre = '';
    this.email = '';
    this.membresia = 'normal';
  }
  

  guardar(formulario: any): void {
    const usuario = {
      nombre: this.nombre,
      email: this.email,
      membresia: this.membresia
    };
    
    this.servicio.postUsuario(usuario).subscribe(() => {
      this.mensajeExito = true;
      this.factura = { ...usuario, fecha: new Date().toLocaleString() };
      this.mostrarFactura = true;
      
      setTimeout(() => {
        this.mensajeExito = false;
      }, 3000);
    });
  }

  cerrarFactura(): void {
    this.mostrarFactura = false;
    this.resetFormulario();
  }
  

  descargarFactura(): void {
    const contenido = `Factura de Suscripción\n\nNombre: ${this.factura.nombre}\nEmail: ${this.factura.email}\nMembresía: ${this.factura.membresia}\nFecha: ${this.factura.fecha}`;
    const blob = new Blob([contenido], { type: 'text/plain' });
    const enlace = document.createElement('a');
    enlace.href = URL.createObjectURL(blob);
    enlace.download = 'factura_suscripcion.txt';
    enlace.click();
    URL.revokeObjectURL(enlace.href);
  }
}

