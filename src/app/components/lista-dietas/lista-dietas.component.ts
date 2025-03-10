import { Component, OnInit } from '@angular/core';
import { DietasService } from '../../service/dietas.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { RecetasService } from '../../service/recetas.service';

@Component({
  selector: 'app-lista-dietas',
  standalone: true,
  imports: [CommonModule, RouterModule,FormsModule],
  templateUrl: './lista-dietas.component.html',
  styleUrls: ['./lista-dietas.component.css']
})
export class ListaDietasComponent  {
  dietas: any[] = [];

  constructor(private servicio: DietasService) {}

  ngOnInit() {
    this.servicio.getDieta().subscribe(dieta =>
       {this.dietas = dieta;
    });

    }
    eliminar(id:any){
      this.servicio.deleteDieta(id).subscribe(()=>{
        window.location.reload();
      });  
  }
}
