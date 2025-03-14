import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-nutriolgos',
  standalone: true,
  imports: [],
  templateUrl: './nutriolgos.component.html',
  styleUrl: './nutriolgos.component.css'
})
export class NutriolgosComponent  {
  constructor(private route:Router){}
  
  logout(){
    localStorage.setItem("login","false")
    this.route.navigate(['home'])

  }

}

