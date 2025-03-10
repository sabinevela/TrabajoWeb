import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DietasService } from '../../service/dietas.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editar-dieta',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './editar-dieta.component.html',
  styleUrl: './editar-dieta.component.css'
})
export class EditarDietaComponent {
  constructor(private servicio: DietasService, private router: Router) {}
  
  ruta = inject(ActivatedRoute);

  id: any;
  nombre: any;
  pasos: any;
  descripcion: any;
  item: any;

  editar(formulario: any): void {
    this.servicio.putDieta(formulario.value).subscribe(() => {
      this.router.navigate(['/dietas']);
    });
  }

  ngOnInit() {
    this.ruta.params.subscribe(d => {
      this.servicio.getDietaById(d["idDietas"]).subscribe(dietas => {
        this.item = dietas;
        this.id = this.item.id;
        this.nombre = this.item.nombre;
        this.pasos = this.item.pasos;
        this.descripcion = this.item.descripcion;
      });
    });
  }
}
