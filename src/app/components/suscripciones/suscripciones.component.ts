import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-suscripciones',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './suscripciones.component.html',
  styleUrls: ['./suscripciones.component.css']
})
export class SuscripcionesComponent {
  modalAbierto = false;
  tituloModal = '';
  descripcionModal = '';
  imagenesModal: string[] = [];

  abrirModal(tipo: string) {
    this.modalAbierto = true;
    if (tipo === 'vip') {
      this.tituloModal = 'Suscripción VIP';
      this.descripcionModal = 'Incluye asesoría personalizada, planes de alimentación exclusivos y acceso a contenido premium.';
      this.imagenesModal = ['/assets/img/vip1.jpg', '/assets/img/vip2.jpg'];
    } else if (tipo === 'normal') {
      this.tituloModal = 'Suscripción Normal';
      this.descripcionModal = 'Un plan equilibrado con guías nutricionales y recetas saludables.';
      this.imagenesModal = ['/assets/img/normal1.jpg', '/assets/img/normal2.jpg'];
    } else if (tipo === 'deportista') {
      this.tituloModal = 'Suscripción Deportista';
      this.descripcionModal = 'Enfocado en atletas, con dietas especializadas para mejorar el rendimiento físico.';
      this.imagenesModal = ['/assets/img/deportista1.jpg', '/assets/img/deportista2.jpg'];
    }
  }

  cerrarModal() {
    this.modalAbierto = false;
  }
}