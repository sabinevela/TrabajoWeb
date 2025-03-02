import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RecetaService } from '../../service/receta.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editar-receta',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './editar-receta.component.html',
  styleUrls: ['./editar-receta.component.css']
})
export class EditarRecetaComponent {
  post: any;

  constructor(private servicio: RecetaService, private router: Router) {}
  ruta = inject(ActivatedRoute);

  id: any;
  nombre: any;
  descripcion: any;
  imagen: any;
  item: any;

  editar(formulario: any): void {
    this.servicio.putRecetas(formulario.value).subscribe(() => {
      this.router.navigate(['/recetas']);
    });
  }

  ngOnInit() {
    this.ruta.params.subscribe((params) => {
      const id = params['id'];
      if (id) {
        this.servicio.getRecetasById(id).subscribe((receta) => {
          this.item = receta;
          this.id = this.item.id;
          this.nombre = this.item.nombre;
          this.descripcion = this.item.descripcion;
          this.imagen = this.item.imagen;
        });
      }
    });
  }
}
 