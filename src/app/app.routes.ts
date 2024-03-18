import { Routes } from '@angular/router';
import { HomeComponent } from './components/page/home/home.component';
import { AdministrationComponent } from './components/page/sellers/sellers.component';
import { CarsComponent } from './components/page/cars/cars.component';


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
    title: 'Vendedores',
    path: 'sellers',
    component: AdministrationComponent
  },
  {
    title: 'Veículos',
    path: 'cars',
    component: CarsComponent
  }
];
