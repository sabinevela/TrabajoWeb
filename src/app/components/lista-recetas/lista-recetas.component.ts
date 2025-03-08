import { Component } from '@angular/core';
import { RecetasService } from '../../service/recetas.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-lista-recetas',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './lista-recetas.component.html',
  styleUrl: './lista-recetas.component.css'
})
export class ListaRecetasComponent {
  recetas: any[] = [];

  constructor(private servicio: RecetasService) {}

  ngOnInit() {
    this.servicio.getReceta().subscribe(receta =>
       {this.recetas = receta;
    });

    }
    eliminar(id:any){
      this.servicio.deleteReceta(id).subscribe(()=>{
        window.location.reload();
      });  
  }
}
