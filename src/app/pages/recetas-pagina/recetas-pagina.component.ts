import { Component } from '@angular/core';
import { FormularioRecetasComponent } from "../../components/formulario-recetas/formulario-recetas.component";
import { EditarRecetaComponent } from "../editar-receta/editar-receta.component";
import { TablaRecetasComponent } from "../../components/tabla-recetas/tabla-recetas.component";

@Component({
  selector: 'app-recetas-pagina',
  standalone: true,
  imports: [FormularioRecetasComponent, EditarRecetaComponent, TablaRecetasComponent],
  templateUrl: './recetas-pagina.component.html',
  styleUrl: './recetas-pagina.component.css'
})
export class RecetasPaginaComponent {

}
