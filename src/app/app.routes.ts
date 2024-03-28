import { Routes } from '@angular/router';
import { HomeComponent } from './components/page/home/home.component';
import { AdministrationComponent } from './components/page/sellers/sellers.component';
import { CarsComponent } from './components/page/cars/cars.component';
import { UsersLoginComponent } from './components/users/users-login/users-login.component';
import { UsersRegisterComponent } from './components/users/users-register/users-register.component';
import { UsersComponent } from './components/page/users/users.component';
import { ServicePageComponent } from './components/page/service-page/service-page.component';
import { ContactComponent } from './components/page/contact/contact.component';
import { authGuard } from './guards/auth-guard.guard';


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
    component: AdministrationComponent,
    canActivate: [authGuard]
  },
  {
    title: 'Veículos',
    path: 'cars',
    component: CarsComponent,
    canActivate: [authGuard]
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
  },
  {
    title: 'Usuário',
    path: 'user',
    component: UsersComponent,
    canActivate: [authGuard]
  },
  {
    title: 'Serviços',
    path: 'services',
    component: ServicePageComponent
  },
  {
    title: 'Contato',
    path: 'contacts',
    component: ContactComponent
  }
];
