import { Component, OnInit, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';
import {MatMenuModule} from '@angular/material/menu';

@Component({
  selector: 'app-tool-bar',
  standalone: true,
  imports: [
    MatButtonModule,
    MatIconModule,
    MatMenuModule
  ],
  templateUrl: './tool-bar.component.html',
  styleUrl: './tool-bar.component.scss'
})
export class ToolBarComponent implements OnInit{

  public userId!: string;
  public token!: string;
  private routerService = inject(Router);

  constructor(){}

  ngOnInit(): void {
    if (typeof localStorage != 'undefined') {
      this.token = localStorage.getItem('token') as string;
      this.userId = localStorage.getItem('userId') as string;
    }
  }

  redirecionarHome(): void{
    this.routerService.navigate(['home']);
  };

  redirecionarAdministracao(): void{
    this.routerService.navigate(['sellers']);
  };

  redirecionarCarros(): void{
    this.routerService.navigate(['cars']);
  };

  redirecionarUsuario(): void{
    this.routerService.navigate(['user']);
  };

  redirecionarLogin(): void{
    this.routerService.navigate(['login']);
  };

}
