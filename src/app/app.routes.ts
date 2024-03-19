import { Routes } from '@angular/router';
import { HomeComponent } from './components/page/home/home.component';
import { AdministrationComponent } from './components/page/sellers/sellers.component';
import { CarsComponent } from './components/page/cars/cars.component';
import { UsersLoginComponent } from './components/users/users-login/users-login.component';
import { UsersRegisterComponent } from './components/users/users-register/users-register.component';


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
  },
  {
    title: 'Login',
    path: 'login',
    component: UsersLoginComponent
  },
  {
    title: 'Register',
    path: 'register',
    component: UsersRegisterComponent
  }
];
