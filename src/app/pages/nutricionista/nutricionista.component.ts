import { Component } from '@angular/core';
import { NutricionistasCComponent } from "../../components/nutricionistas-c/nutricionistas-c.component";
import { ListaNutricionistasComponent } from "../../components/lista-nutricionistas/lista-nutricionistas.component";

@Component({
  selector: 'app-nutricionista',
  standalone: true,
  imports: [NutricionistasCComponent, ListaNutricionistasComponent],
  templateUrl: './nutricionista.component.html',
  styleUrl: './nutricionista.component.css'
})
export class NutricionistaComponent {

}
