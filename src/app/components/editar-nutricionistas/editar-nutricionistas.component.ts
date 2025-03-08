import { Component, inject } from '@angular/core';
import { NutricionistaService } from '../../service/nutricionista.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-editar-nutricionistas',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './editar-nutricionistas.component.html',
  styleUrl: './editar-nutricionistas.component.css'
})
export class EditarNutricionistasComponent {
constructor(private servicio: NutricionistaService, private Router: Router) {}
  
  ruta = inject(ActivatedRoute);

  id: any;
  nombre:any;
email:any;
password:any;
titulo:any;
experiencia:any;
edad:any;
  item: any;

  editar(formulario: any): void {
    this.servicio.putNutricionista(formulario.value).subscribe(() => {
      this.Router.navigate(['/nutricionistas']);
    });
  }

  ngOnInit() {
    this.ruta.params.subscribe(r => {
      this.servicio.getNutricionistaById(r["idRecetas"]).subscribe(recetas => {
        this.item = recetas;
        this.id = this.item.id;
        this.nombre = this.item.nombre;
        this.email = this.item.email;
        this.password = this.item.password;
        this.titulo=this.item.titulo;
        this.experiencia=this.item.experiencia;
        this.edad=this.item.edad;


      });
    });
  }
}


