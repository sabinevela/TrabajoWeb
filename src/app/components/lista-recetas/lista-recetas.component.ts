import { Component } from '@angular/core';
import { RecetaSServiceService } from '../../service/receta.s-service.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-lista-recetas',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './lista-recetas.component.html',
  styleUrls: ['./lista-recetas.component.css']
})
export class ListaRecetasComponent {
  recetas: any[] = [];

  constructor(private servicio: RecetaSServiceService) {}

  ngOnInit() {
    this.obtenerRecetas();
  }

  obtenerRecetas() {
    this.servicio.getRecetas().subscribe(data => {
      this.recetas = data;
    });
  }

  eliminarRecetas(id: number) {
    this.servicio.deleteRecetas(id).subscribe(() => {
      this.obtenerRecetas();
    });
  }

  actualizarReceta(id: number, receta: any) {
    this.servicio.updateRecetas(id, receta).subscribe(() => {
      this.obtenerRecetas();
    });
  }
}




