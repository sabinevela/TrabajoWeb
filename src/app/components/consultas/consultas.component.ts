import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ConsultasService } from '../../service/consultas.service';

@Component({
  selector: 'app-consultas',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './consultas.component.html',
  styleUrls: ['./consultas.component.css']
})
export class ConsultasComponent {
  constructor(private servicio:ConsultasService){
  }
  nombre:any;
  email:any;
  mensaje:any;

  guardar(formulario:any){
    this.servicio.postConsulta(formulario.value).subscribe(()=>{
      window.location.reload();
    });
  }
  eliminar(formulario:any){
    const id=formulario.value.id;
    this.servicio.deleteConsulta(id).subscribe(()=>{
      window.location.reload();
    })
  }
}
