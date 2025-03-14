import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-javier-perfil',
  standalone: true,
  imports: [],
  templateUrl: './javier-perfil.component.html',
  styleUrl: './javier-perfil.component.css'
})
export class JavierPerfilComponent {
  constructor(private route:Router){}
  
  logout(){
    localStorage.setItem("login","false")
    this.route.navigate(['home'])

  }

}
