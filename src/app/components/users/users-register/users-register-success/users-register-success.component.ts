import { Component, OnInit, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogRef } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users-register-success',
  standalone: true,
  imports: [
    MatButtonModule,
    MatIconModule
  ],
  templateUrl: './users-register-success.component.html',
  styleUrl: './users-register-success.component.scss'
})
export class UsersRegisterSuccessComponent implements OnInit{
  private dialogRef = inject(MatDialogRef);
  private routerService = inject(Router);

  ngOnInit(): void {
    this.closeModalRegisterSuccess();
  }

  closeModalRegisterSuccess():void{
    setTimeout(() => {
      this.routerService.navigate(['login'])
      this.dialogRef.close();
    }, 2500);
  }
}
