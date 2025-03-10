import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DietasService } from '../../service/dietas.service';
import { ListaDietasComponent } from "../../components/lista-dietas/lista-dietas.component";

@Component({
  selector: 'app-dietas',
  standalone: true,
  imports: [FormsModule, ListaDietasComponent],
  templateUrl: './dietas.component.html',
  styleUrl: './dietas.component.css'
})
export class DietasComponent {
  constructor(private servicio:DietasService){
  }
  nombre:any;
  pasos:any;
  descripcion:any;

  guardar(formulario:any){
    this.servicio.postDieta(formulario.value).subscribe(()=>{
      window.location.reload();
    });
  }
  eliminar(formulario:any){
    const id=formulario.value.id;
    this.servicio.deleteDieta(id).subscribe(()=>{
      window.location.reload();
    })
  }
}

