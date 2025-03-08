import { Component } from '@angular/core';
import { NutricionistaService } from '../../service/nutricionista.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form-nutri',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './form-nutri.component.html',
  styleUrl: './form-nutri.component.css'
})
export class FormNutriComponent {
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
