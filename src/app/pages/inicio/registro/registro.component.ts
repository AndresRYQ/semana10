import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Producto {
  nombre: string;
  categoria: string;
  precio: number;
  stock: number;
}

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.css'
})
export class RegistroComponent {
  producto: Producto = {
    nombre: '',
    categoria: '',
    precio: 0,
    stock: 0
  };

  productosRegistrados: Producto[] = [];
  mensajeExito: string = '';

  guardar() {
    if (this.validarFormulario()) {
      this.productosRegistrados.push({ ...this.producto });
      this.mensajeExito = `Producto "${this.producto.nombre}" registrado exitosamente`;
      this.limpiar();
      
      setTimeout(() => {
        this.mensajeExito = '';
      }, 3000);
    }
  }

  limpiar() {
    this.producto = {
      nombre: '',
      categoria: '',
      precio: 0,
      stock: 0
    };
  }

  validarFormulario(): boolean {
    if (!this.producto.nombre.trim()) {
      alert('El nombre del producto es obligatorio');
      return false;
    }
    if (!this.producto.categoria.trim()) {
      alert('La categoría es obligatoria');
      return false;
    }
    if (this.producto.precio <= 0) {
      alert('El precio debe ser mayor a 0');
      return false;
    }
    if (this.producto.stock < 0) {
      alert('El stock no puede ser negativo');
      return false;
    }
    return true;
  }

  eliminarProducto(index: number) {
    this.productosRegistrados.splice(index, 1);
  }
}
