import { Component } from '@angular/core';
import { RecetaService } from '../../service/receta.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-formulario-recetas',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './formulario-recetas.component.html',
  styleUrls: ['./formulario-recetas.component.css']
})
export class FormularioRecetasComponent {
  nombre: string = '';
  descripcion: string = '';
  selectedFile: File | null = null;

  constructor(private servicio: RecetaService, private router: Router) {}

  onFileChange(event: any) {
    if (event.target.files && event.target.files[0]) {
      this.selectedFile = event.target.files[0];
    }
  }

  guardar(formulario: any) {
    if (this.selectedFile && this.nombre && this.descripcion) {
      const formData = new FormData();
      formData.append('nombre', this.nombre);
      formData.append('descripcion', this.descripcion);
      formData.append('imagen', this.selectedFile, this.selectedFile.name);
  
      this.servicio.postRecetas(formData).subscribe(
        (response) => {
          console.log('Receta guardada:', response);
          this.router.navigate(['/recetas']);
        },
        (error) => {
          console.error('Error al guardar la receta', error);
          alert('Hubo un problema al guardar la receta. Por favor, inténtalo nuevamente.');
        }
      );
    } else {
      alert('Por favor, completa todos los campos y selecciona una imagen.');
    }
  }
}


 