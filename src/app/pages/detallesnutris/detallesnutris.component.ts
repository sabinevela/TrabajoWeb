import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detallesnutris',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './detallesnutris.component.html',
  styleUrl: './detallesnutris.component.css'
})
export class DetallesnutrisComponent implements OnInit {
  nutriologo: any;

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.nutriologo = { id, nombre: `Nutricionista ${id}`, detalles: 'Aquí van los detalles profesionales del nutriologo.' };
  }

  constructor(private route: ActivatedRoute) {}
}