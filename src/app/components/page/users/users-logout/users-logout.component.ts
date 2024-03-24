import { Component, inject, Inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { UsersLogoutSuccessComponent } from './users-logout-success/users-logout-success.component';

@Component({
  selector: 'app-users-logout',
  standalone: true,
  imports: [
    MatButtonModule,
    MatIconModule,
    MatDialogModule
  ],
  templateUrl: './users-logout.component.html',
  styleUrl: './users-logout.component.scss'
})
export class UsersLogoutComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public userName:string){}

  private dialogRef = inject(MatDialogRef);
  private dialogService = inject(MatDialog);

  closeModalLogout(): void{
    this.dialogRef.close();
  };

  openModalSuccessLogout(): void{
    this.dialogRef.close();
    this.dialogService.open(UsersLogoutSuccessComponent, {
      width: '500px',
      height: '400px',
      data: this.userName
    });
  };

}
