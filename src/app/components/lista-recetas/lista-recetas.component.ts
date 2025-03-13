import { Component } from '@angular/core';
import { RecetasService } from '../../service/recetas.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { RecetaSServiceService } from '../../service/receta.s-service.service';

@Component({
  selector: 'app-lista-recetas',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './lista-recetas.component.html',
  styleUrl: './lista-recetas.component.css'
})
export class ListaRecetasComponent {
  recetas: any[] = [];

  constructor(private servicio: RecetaSServiceService) {}

  ngOnInit() {
    this.obtenerRecetas();
    
    }

  obtenerRecetas(){
    this.servicio.getRecetas().subscribe(data=>{
      this.recetas=data;
    })
  }

}
