import { Component, OnInit } from '@angular/core';
import { ConsultasService } from '../../service/consultas.service';
import { CommonModule } from '@angular/common';
import { ConsultasConeService } from '../../service/consultas-cone.service';

@Component({
  selector: 'app-lista-consultas',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lista-consultas.component.html',
  styleUrls: ['./lista-consultas.component.css']
})
export class ListaConsultasComponent implements OnInit {
  consultas: any[] = [];

  constructor(private servicio: ConsultasConeService) {}

  ngOnInit() {
    this.servicio.getConsultas().subscribe((consulta) => {
      this.consultas = consulta;
    });
  }

  obtenerConsultas() {
    this.servicio.getConsultas().subscribe(data => {
      this.consultas = data;
    });
  }

  eliminarConsultas(id: number) {
    this.servicio.deleteConsultas(id).subscribe(() => {
      this.obtenerConsultas();
    });
  }

  actualizarConsultas(id: number, consulta: any) {
    this.servicio.updateConsultas(id, consulta).subscribe(() => {
      this.obtenerConsultas();
    });
  }
}




