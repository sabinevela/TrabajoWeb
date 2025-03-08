import { Component } from '@angular/core';
import { RecetasService } from '../../service/recetas.service';
import { NutricionistaService } from '../../service/nutricionista.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-nutricionistas-c',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './nutricionistas-c.component.html',
  styleUrl: './nutricionistas-c.component.css'
})
export class NutricionistasCComponent {
constructor(private servicio:NutricionistaService){

}
nombre:any;
email:any;
password:any;
titulo:any;
experiencia:any;
edad:any;
 
guardar(formulario:any){
  this.servicio.postNutricionista(formulario.value).subscribe(()=>{
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
