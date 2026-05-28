import { Component } from '@angular/core';
import { CommonModule, CurrencyPipe, DatePipe } from '@angular/common';

interface Producto {
  id: number;
  nombre: string;
  categoria: string;
  precio: number;
  fechaRegistro: Date;
  stockDisponible: number;
}

@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [CommonModule, CurrencyPipe, DatePipe],
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.css'
})
export class ProductosComponent {
  productos: Producto[] = [
    {
      id: 1,
      nombre: 'LAPTOP LENOVO IDEAPAD',
      categoria: 'Tecnología',
      precio: 3500.00,
      fechaRegistro: new Date('2026-05-10'),
      stockDisponible: 8
    },
    {
      id: 2,
      nombre: 'MOUSE INALÁMBRICO LOGITECH',
      categoria: 'Accesorios',
      precio: 85.50,
      fechaRegistro: new Date('2026-05-12'),
      stockDisponible: 25
    },
    {
      id: 3,
      nombre: 'MONITOR SAMSUNG 24 PULGADAS',
      categoria: 'Tecnología',
      precio: 720.00,
      fechaRegistro: new Date('2026-05-15'),
      stockDisponible: 12
    }
  ];
}
