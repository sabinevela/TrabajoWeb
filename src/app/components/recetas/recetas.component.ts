import { Component } from '@angular/core';
import { RecetasService } from '../../service/recetas.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-recetas',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './recetas.component.html',
  styleUrl: './recetas.component.css'
})
export class RecetasComponent {
  constructor(private servicio:RecetasService){
  }
  nombre:any;
  pasos:any;
  descripcion:any;

  guardar(formulario:any){
    this.servicio.postReceta(formulario.value).subscribe(()=>{
      window.location.reload();
    });
  }
  eliminar(formulario:any){
    const id=formulario.value.id;
    this.servicio.deleteReceta(id).subscribe(()=>{
      window.location.reload();
    })
  }
}
