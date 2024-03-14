import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';


@Component({
  selector: 'app-tool-bar',
  standalone: true,
  imports: [
    MatButtonModule
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

}
