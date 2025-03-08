import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {
  calculadoraForm: FormGroup;
  resultado: any = null;
  mostrarModal: boolean = false;
  mostrarModalAdvertencia: boolean = false;

  constructor(private fb: FormBuilder) {
    this.calculadoraForm = this.fb.group({
      edad: ['', [Validators.required, Validators.min(10)]],
      sexo: ['masculino', Validators.required],
      peso: ['', [Validators.required, Validators.min(30)]],
      altura: ['', [Validators.required, Validators.min(100)]],
      actividad: ['1.2', Validators.required],
      objetivo: ['mantener', Validators.required]
    });
  }

  calcular() {
    if (this.calculadoraForm.invalid) return;

    const { edad, sexo, peso, altura, actividad, objetivo } = this.calculadoraForm.value;

    let pesoMinimo: number, pesoMaximo: number;
    
    if (objetivo === 'perder') {
      pesoMinimo = 50;
      pesoMaximo = 100;
    } else if (objetivo === 'ganar') {
      pesoMinimo = 60;
      pesoMaximo = 150;
    } else {
      pesoMinimo = 50; 
      pesoMaximo = 100;
    }

    if (peso < pesoMinimo || peso > pesoMaximo) {
      this.mostrarModalAdvertencia = true;
      return;
    }

    let tmb = sexo === 'masculino'
      ? (10 * peso) + (6.25 * altura) - (5 * edad) + 5
      : (10 * peso) + (6.25 * altura) - (5 * edad) - 161;

    let caloriasTotales = tmb * parseFloat(actividad);

    if (objetivo === 'perder') caloriasTotales *= 0.8;
    else if (objetivo === 'ganar') caloriasTotales *= 1.2;

    const proteinas = peso * 2;
    const grasas = caloriasTotales * 0.25 / 9;
    const carbohidratos = (caloriasTotales - (proteinas * 4 + grasas * 9)) / 4;

    this.resultado = {
      calorias: caloriasTotales.toFixed(2),
      proteinas: proteinas.toFixed(2),
      grasas: grasas.toFixed(2),
      carbohidratos: carbohidratos.toFixed(2)
    };

    this.mostrarModal = true;
  }

  cerrarModal() {
    this.mostrarModal = false;
  }

  cerrarModalAdvertencia() {
    this.mostrarModalAdvertencia = false;
  }
}
