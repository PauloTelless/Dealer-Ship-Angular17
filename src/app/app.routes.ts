import { Routes } from '@angular/router';
import { HomeComponent } from './components/page/home/home.component';
import { AdministrationComponent } from './components/page/administration/administration.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    title: 'Home',
    path: 'home',
    component: HomeComponent
  },
  {
    title: 'Administrador',
    path: 'administration',
    component: AdministrationComponent
  }
];
