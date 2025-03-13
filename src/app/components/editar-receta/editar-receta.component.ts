import { Component, inject } from '@angular/core';
import { RecetasService } from '../../service/recetas.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-editar-receta',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './editar-receta.component.html',
  styleUrls: ['./editar-receta.component.css'] 
})
export class EditarRecetaComponent {
  constructor(private servicio: RecetasService, private router: Router) {}
  
  ruta = inject(ActivatedRoute);

  id: any;
  titulo: any;
  pasos: any;
  descripcion: any;
  item: any;

  editar(formulario: any): void {
    this.servicio.putReceta(formulario.value).subscribe(() => {
      this.router.navigate(['/recetas']);
    });
  }

  ngOnInit() {
    this.ruta.params.subscribe(r => {
      this.servicio.getRecetaById(r["idRecetas"]).subscribe(recetas => {
        this.item = recetas;
        this.id = this.item.id;
        this.titulo = this.item.titulo;
        this.pasos = this.item.pasos;
        this.descripcion = this.item.descripcion;
      });
    });
  }
}
