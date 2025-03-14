import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
interface Nutriologo {
  id: number;
  nombre: string;
  especialidad: string;
  experiencia: string;
  estudios: string;
  contacto: string;
  imagen: string;
}

@Component({
  selector: 'app-presentacion-nutriologos',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './presentacion-nutriologos.component.html',
  styleUrl: './presentacion-nutriologos.component.css'
})


export class PresentacionNutriologosComponent {
  nutriologos: Nutriologo[] = [
    {
      id: 1,
      nombre: 'Dr. Juan Pérez',
      especialidad: 'Nutrición deportiva',
      experiencia: 'Más de 10 años trabajando con atletas olímpicos.',
      estudios: 'Doctorado en Ciencias de la Nutrición - UNAM',
      contacto: 'juan.perez@nutricion.com',
      imagen: 'https://i.pinimg.com/736x/7b/63/e2/7b63e2b9d44b4af0bf15a13f3882dc2e.jpg'
    },
    {
      id: 2,
      nombre: 'Dra. Ana López',
      especialidad: 'Nutrición deportiva',
      experiencia: 'Más de 10 años trabajando con atletas olímpicos.',
      estudios: 'Doctorado en Ciencias de la Nutrición - UNAM',
      contacto: 'ana.lopez@nutricion.com',
      imagen: 'https://i.pinimg.com/736x/67/78/e4/6778e456b0e425de21f8c4e47e5fedda.jpg'
    },
    {
      id: 3,
      nombre: 'Dr. Carlos Ramírez',
      especialidad: 'Nutrición clínica',
      experiencia: 'Especialista en obesidad y trastornos metabólicos.',
      estudios: 'Maestría en Nutrición Clínica - UAM',
      contacto: 'carlos.ramirez@nutricion.com',
      imagen: 'https://i.pinimg.com/736x/44/28/aa/4428aaf8c622a8ef273130e1d2a17077.jpg'
    },
    {
      id: 4,
      nombre: 'Dra. Sofía Méndez',
      especialidad: 'Nutrición pediátrica',
      experiencia: 'Atención nutricional para niños y adolescentes.',
      estudios: 'Especialidad en Nutrición Infantil - UDG',
      contacto: 'sofia.mendez@nutricion.com',
      imagen: 'https://i.pinimg.com/736x/e4/07/25/e407254b757d346b282935dd2a0a77f6.jpg'
    },
    {
      id: 5,
      nombre: 'Dr. Javier Torres',
      especialidad: 'Nutrición geriátrica',
      experiencia: 'Más de 15 años atendiendo a adultos mayores.',
      estudios: 'Maestría en Nutrición Geriátrica - UABC',
      contacto: 'javier.torres@nutricion.com',
      imagen: 'https://i.pinimg.com/736x/4b/ea/99/4bea99eb80bbd65cce12c9bc66717d02.jpg'
    }
  ];

  nutriologoSeleccionado: Nutriologo | null = null;
  modalAbierto = false;

  abrirModal(nutriologo: Nutriologo) {
    this.nutriologoSeleccionado = nutriologo;
    this.modalAbierto = true;
  }

  cerrarModal() {
    this.modalAbierto = false;
    this.nutriologoSeleccionado = null;
  }
}