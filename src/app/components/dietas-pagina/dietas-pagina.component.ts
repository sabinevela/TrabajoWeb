import { Component } from '@angular/core';
import { DietasComponent } from "../../pages/dietas/dietas.component";
import { ListaDietasComponent } from "../lista-dietas/lista-dietas.component";

@Component({
  selector: 'app-dietas-pagina',
  standalone: true,
  imports: [DietasComponent, ListaDietasComponent],
  templateUrl: './dietas-pagina.component.html',
  styleUrl: './dietas-pagina.component.css'
})
export class DietasPaginaComponent {

}
