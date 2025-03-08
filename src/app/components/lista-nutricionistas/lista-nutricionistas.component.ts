import { Component } from '@angular/core';
import { NutricionistaService } from '../../service/nutricionista.service';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-lista-nutricionistas',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './lista-nutricionistas.component.html',
  styleUrl: './lista-nutricionistas.component.css'
})
export class ListaNutricionistasComponent {
 nutricionistas: any[] = [];

  constructor(private servicio: NutricionistaService) {}

  ngOnInit() {
    this.servicio.getReceta().subscribe(nutricionista =>
       {this.nutricionistas = nutricionista;
    });

    }
    eliminar(id:any){
      this.servicio.deleteReceta(id).subscribe(()=>{
        window.location.reload();
      });  
  }
}


