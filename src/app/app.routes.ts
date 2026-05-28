import { Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { Pregunta1Component } from './pages/inicio/pregunta1/pregunta1.component';
import { ProductosComponent } from './pages/inicio/productos/productos.component';
import { RegistroComponent } from './pages/inicio/registro/registro.component';

export const routes: Routes = [
  {
    path: 'inicio',
    component: InicioComponent
  },
  {
    path: 'pregunta1',
    component: Pregunta1Component
  },
  {
    path: 'productos',
    component: ProductosComponent
  },
  {
    path: 'registro',
    component: RegistroComponent
  },
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  }
];
