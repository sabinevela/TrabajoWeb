import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ConsultasService } from '../../service/consultas.service';
import { ConsultasConeService } from '../../service/consultas-cone.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-consultas',
  standalone: true,
  imports: [FormsModule,RouterModule],
  templateUrl: './consultas.component.html',
  styleUrls: ['./consultas.component.css']
})
export class ConsultasComponent {
  constructor(private servicio:ConsultasService){
  }
  
  nombre:any;
  email:any;
  mensaje:any;
  fecha:any;

  guardar(formulario:any){
    this.servicio.postConsulta(formulario.value).subscribe(()=>{
      window.location.reload();
    });
  }

}
