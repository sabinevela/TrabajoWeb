import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-perfil-nutricionista',
  standalone: true,
  imports: [],
  templateUrl: './perfil-nutricionista.component.html',
  styleUrl: './perfil-nutricionista.component.css'
})
export class PerfilNutricionistaComponent {
  constructor(private route:Router){}
  
  logout(){
    localStorage.setItem("login","false")
    this.route.navigate(['home'])

  }

}
