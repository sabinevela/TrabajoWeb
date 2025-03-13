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
  selector: 'app-perfiles-nutris',
  templateUrl: './perfiles-nutris.component.html',
  standalone: true,
  imports: [FormsModule, CommonModule],
  styleUrls: ['./perfiles-nutris.component.css']
})
export class PerfilesNutrisComponent {
  nutriologos: Nutriologo[] = [
    {
      id: 1,
      nombre: 'Dra. Ana López',
      especialidad: 'Nutrición deportiva',
      experiencia: 'Más de 10 años trabajando con atletas olímpicos.',
      estudios: 'Doctorado en Ciencias de la Nutrición - UNAM',
      contacto: 'ana.lopez@nutricion.com',
      imagen: 'https://i.pinimg.com/736x/67/78/e4/6778e456b0e425de21f8c4e47e5fedda.jpg'
    },
    {
      id: 2,
      nombre: 'Dr. Carlos Ramírez',
      especialidad: 'Nutrición clínica',
      experiencia: 'Especialista en obesidad y trastornos metabólicos.',
      estudios: 'Maestría en Nutrición Clínica - UAM',
      contacto: 'carlos.ramirez@nutricion.com',
      imagen: 'https://i.pinimg.com/736x/44/28/aa/4428aaf8c622a8ef273130e1d2a17077.jpg'
    },
    {
      id: 3,
      nombre: 'Dra. Sofía Méndez',
      especialidad: 'Nutrición pediátrica',
      experiencia: 'Atención nutricional para niños y adolescentes.',
      estudios: 'Especialidad en Nutrición Infantil - UDG',
      contacto: 'sofia.mendez@nutricion.com',
      imagen: 'https://i.pinimg.com/736x/e4/07/25/e407254b757d346b282935dd2a0a77f6.jpg'
    },
    {
      id: 4,
      nombre: 'Dr. Javier Torres',
      especialidad: 'Nutrición geriátrica',
      experiencia: 'Más de 15 años atendiendo a adultos mayores.',
      estudios: 'Maestría en Nutrición Geriátrica - UABC',
      contacto: 'javier.torres@nutricion.com',
      imagen: 'https://i.pinimg.com/736x/4b/ea/99/4bea99eb80bbd65cce12c9bc66717d02.jpg'
    },
    {
      id: 5,
      nombre: 'Dra. Elena Castillo',
      especialidad: 'Nutrición oncológica',
      experiencia: 'Especialista en pacientes con cáncer.',
      estudios: 'Doctorado en Nutrición y Oncología - IPN',
      contacto: 'elena.castillo@nutricion.com',
      imagen: 'https://i.pinimg.com/736x/9d/d3/5f/9dd35fee68936cdc517fda61f9ac2818.jpg'
    },
    {
      id: 6,
      nombre: 'Dr. Andrés Villalobos',
      especialidad: 'Nutrición metabólica',
      experiencia: 'Manejo nutricional de diabetes y síndrome metabólico.',
      estudios: 'Maestría en Ciencias de la Salud - UANL',
      contacto: 'andres.villalobos@nutricion.com',
      imagen: 'https://i.pinimg.com/736x/75/27/f5/7527f5904599adea2ed3fb5c3cd61f30.jpg'
    },
    {
      id: 7,
      nombre: 'Dra. Mariana Pérez',
      especialidad: 'Nutrición vegetariana',
      experiencia: 'Asesoramiento en dietas veganas y vegetarianas.',
      estudios: 'Especialización en Dietas Basadas en Plantas - UNAM',
      contacto: 'mariana.perez@nutricion.com',
      imagen: 'https://i.pinimg.com/736x/8d/69/61/8d69614c3d66b0efdc387897b4bfb2af.jpg'
    },
    {
      id: 8,
      nombre: 'Dr. Eduardo Gómez',
      especialidad: 'Nutrición deportiva avanzada',
      experiencia: 'Nutricionista de equipos de fútbol profesional.',
      estudios: 'Maestría en Nutrición Deportiva - UAM',
      contacto: 'eduardo.gomez@nutricion.com',
      imagen: 'https://i.pinimg.com/736x/b5/f0/f0/b5f0f0631366a3b993239bfc0f042ab4.jpg'
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









