import { Component } from '@angular/core';
import { RecetasComponent } from "../../components/recetas/recetas.component";
import { EditarRecetaComponent } from "../../components/editar-receta/editar-receta.component";
import { ListaRecetasComponent } from "../../components/lista-recetas/lista-recetas.component";

@Component({
  selector: 'app-recetas-pagina',
  standalone: true,
  imports: [RecetasComponent, ListaRecetasComponent],
  templateUrl: './recetas-pagina.component.html',
  styleUrl: './recetas-pagina.component.css'
})
export class RecetasPaginaComponent {

}
