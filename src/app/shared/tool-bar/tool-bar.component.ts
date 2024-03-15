import { Component, inject } from '@angular/core';
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
export class ToolBarComponent {

  private routerService = inject(Router);

  constructor(){}


  redirecionarHome(): void{
    this.routerService.navigate(['home']);
  }

  redirecionarAdministracao(): void{
    this.routerService.navigate(['administration'])
  }

}
