import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users-not-logged',
  standalone: true,
  imports: [
    MatButtonModule,
    MatIconModule,
    MatDialogModule
  ],
  templateUrl: './users-not-logged.component.html',
  styleUrl: './users-not-logged.component.scss'
})
export class UsersNotLoggedComponent {
  private dialogRef = inject(MatDialogRef);
  private routerService = inject(Router);

  closeModalUsersNotLogged(): void{
    this.dialogRef.close();
  };

  redirecionarTelaLogin(): void{
    this.routerService.navigate(['/login'])
    this.closeModalUsersNotLogged();
  };

}
