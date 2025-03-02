import { Component } from '@angular/core';
import { RecetaService } from '../../service/receta.service';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tabla-recetas',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './tabla-recetas.component.html',
  styleUrls: ['./tabla-recetas.component.css']
})
export class TablaRecetasComponent {
  recetas: any[] = [];

  constructor(private servicio: RecetaService) {}

  ngOnInit() {
    this.getRecetas();
  }

  getRecetas() {
    this.servicio.getRecetas().subscribe((recetas) => {
      this.recetas = recetas;
    });
  }

  eliminar(id: any) {
    this.servicio.deleteRecetas(id).subscribe(() => {
      this.recetas = this.recetas.filter((receta) => receta.id !== id);
    });
  }
}
