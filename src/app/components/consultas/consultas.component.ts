import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ConsultasService } from '../../service/consultas.service';
import { ConsultasConeService } from '../../service/consultas-cone.service';

@Component({
  selector: 'app-consultas',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './consultas.component.html',
  styleUrls: ['./consultas.component.css']
})
export class ConsultasComponent {
  constructor(private servicio:ConsultasConeService){
  }
  
  nombre:any;
  email:any;
  mensaje:any;

  guardar(formulario:any){
    this.servicio.postConsultas(formulario.value).subscribe(()=>{
      window.location.reload();
    });
  }

}
