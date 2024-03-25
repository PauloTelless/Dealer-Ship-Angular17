import { Component, OnInit, inject } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';
import { UsersLoginSaveComponent } from './users-login-save/users-login-save.component';

@Component({
  selector: 'app-users-login-sucess',
  standalone: true,
  imports: [
    MatIconModule
  ],
  templateUrl: './users-login-sucess.component.html',
  styleUrl: './users-login-sucess.component.scss'
})
export class UsersLoginSucessComponent implements OnInit{

  private routerService = inject(Router);
  private dialogRef = inject(MatDialogRef);
  private dialogService = inject(MatDialog);
  private token!: string;

  ngOnInit(): void {
    this.closeModalUsersLoginSuccess();
    this.token = localStorage.getItem('token') as string;
    setTimeout(() => {
      this.openModalLoginSave();
    }, 3500);
  };

  closeModalUsersLoginSuccess(): void{
    setTimeout(() => {
      this.dialogRef.close();
      this.routerService.navigate(['home'])
    }, 2500);
  };

  openModalLoginSave():void{
    if (this.token) {
      this.dialogService.open(UsersLoginSaveComponent, {
        width: '280px',
        height: '250px'
      });
    };
  };
}
