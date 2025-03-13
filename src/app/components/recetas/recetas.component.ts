import { Component } from '@angular/core';
import { RecetasService } from '../../service/recetas.service';
import { FormsModule } from '@angular/forms';
import { RecetaSServiceService } from '../../service/receta.s-service.service';

@Component({
  selector: 'app-recetas',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './recetas.component.html',
  styleUrl: './recetas.component.css'
})
export class RecetasComponent {
  constructor(private servicio:RecetaSServiceService){
  }
  
  titulo:any;
  pasos:any;
  descripcion:any;

  guardar(formulario:any){
    this.servicio.postRecetas(formulario.value).subscribe(()=>{
      window.location.reload();
    });
  }

}
