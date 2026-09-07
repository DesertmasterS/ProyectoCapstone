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
    path: 'panic-button',
    loadComponent: () => import('./panic-button/panic-button.page').then( m => m.PanicButtonPage)
  },
];
