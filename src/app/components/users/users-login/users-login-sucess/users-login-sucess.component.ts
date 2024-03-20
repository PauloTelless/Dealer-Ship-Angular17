import { Component, OnInit, inject } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';

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

  ngOnInit(): void {
    this.closeModalUsersLoginSuccess();
  };

  closeModalUsersLoginSuccess(): void{
    setTimeout(() => {
      this.dialogRef.close();
      this.routerService.navigate(['home'])
    }, 2500);
  };

}
