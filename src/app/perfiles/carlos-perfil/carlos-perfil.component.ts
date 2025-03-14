import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-carlos-perfil',
  standalone: true,
  imports: [],
  templateUrl: './carlos-perfil.component.html',
  styleUrl: './carlos-perfil.component.css'
})
export class CarlosPerfilComponent {
  constructor(private route:Router){}
  
  logout(){
    localStorage.setItem("login","false")
    this.route.navigate(['home'])

  }

}
