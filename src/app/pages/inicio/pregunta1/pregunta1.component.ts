import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-pregunta1',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './pregunta1.component.html',
  styleUrl: './pregunta1.component.css'
})
export class Pregunta1Component {
  nota1: number = 0;
  nota2: number = 0;
  nota3: number = 0;
  nota4: number = 0;

  suma: number = 0;
  resta: number = 0;
  multiplicacion: number = 0;
  promedio: number = 0;
  estado: string = '';

  procesar() {
    this.suma = this.nota1 + this.nota2 + this.nota3 + this.nota4;
    this.resta = this.nota1 - this.nota2 - this.nota3 - this.nota4;
    this.multiplicacion = this.nota1 * this.nota2 * this.nota3 * this.nota4;
    this.promedio = this.suma / 4;

    if (this.promedio >= 3.0) {
      this.estado = 'Aprobado';
    } else {
      this.estado = 'Reprobado';
    }
  }

  limpiar() {
    this.nota1 = 0;
    this.nota2 = 0;
    this.nota3 = 0;
    this.nota4 = 0;
    this.suma = 0;
    this.resta = 0;
    this.multiplicacion = 0;
    this.promedio = 0;
    this.estado = '';
  }
}
