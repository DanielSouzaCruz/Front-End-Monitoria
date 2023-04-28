import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'perfil',
    loadComponent: () => import('./perfil/perfil.page').then( m => m.PerfilPage)
  },
  
  {
    path: 'placeholder',
    loadComponent: () => import('./placeholder/placeholder.page').then((m) => m.PlaceholderPage),
  },
  {
    path: 'materias',
    loadComponent: () => import('./materias/materias.page').then( m => m.MateriasPage)
  },  {
    path: 'login',
    loadComponent: () => import('./login/login.page').then( m => m.LoginPage)
  },


];
