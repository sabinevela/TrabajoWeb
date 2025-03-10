import { Component, OnInit } from '@angular/core';
import { ConsultasService } from '../../service/consultas.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-lista-consultas',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lista-consultas.component.html',
  styleUrls: ['./lista-consultas.component.css']
})
export class ListaConsultasComponent implements OnInit {
  consultas: any[] = [];

  constructor(private servicio: ConsultasService) {}

  ngOnInit() {
    this.servicio.getConsulta().subscribe((consulta) => {
      this.consultas = consulta;
    });
  }

  eliminar(id: any) {
    this.servicio.deleteConsulta(id).subscribe(() => {
      this.consultas = this.consultas.filter(consulta => consulta.id !== id);
    });
  }

  getConsulta(consulta: any) {
    alert(`Detalles de la consulta: \nNombre: ${consulta.nombre}\nCorreo: ${consulta.email}\nMensaje: ${consulta.mensaje}`);
  }
}

