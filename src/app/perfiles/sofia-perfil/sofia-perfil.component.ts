import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sofia-perfil',
  standalone: true,
  imports: [],
  templateUrl: './sofia-perfil.component.html',
  styleUrl: './sofia-perfil.component.css'
})
export class SofiaPerfilComponent {
  constructor(private route:Router){}
  
  logout(){
    localStorage.setItem("login","false")
    this.route.navigate(['home'])

  }

}
