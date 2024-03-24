import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogRef } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users-pop-up-login',
  standalone: true,
  imports: [
    MatButtonModule,
    MatIconModule
  ],
  templateUrl: './users-pop-up-login.component.html',
  styleUrl: './users-pop-up-login.component.scss'
})
export class UsersPopUpLoginComponent {

  private routerService = inject(Router);
  private dialogRef = inject(MatDialogRef);

  closePopUpLogin(): void{
    this.dialogRef.close();
  };

  redirecionarCadastro(): void{
    this.routerService.navigate(['/register'])
    this.dialogRef.close();
  };
}
