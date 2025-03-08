import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PacienteService } from '../../service/paciente.service';

@Component({
  selector: 'app-login-nutri',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login-nutri.component.html',
  styleUrl: './login-nutri.component.css'
})
export class LoginNutriComponent {
  constructor(private servicio:PacienteService){
  }
  nombre:any;
email:any;
password:any;
edad:any;

 
guardar(formulario:any){
  this.servicio.postPaciente(formulario.value).subscribe(()=>{
    window.location.reload();
  });
}
eliminar(formulario:any){
  const id=formulario.value.id;
  this.servicio.deletePaciente(id).subscribe(()=>{
    window.location.reload();
  })
}
}

