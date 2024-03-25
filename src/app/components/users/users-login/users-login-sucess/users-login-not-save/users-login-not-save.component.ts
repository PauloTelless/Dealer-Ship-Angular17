import { Component, OnInit, inject } from '@angular/core';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users-login-not-save',
  standalone: true,
  imports: [
    MatIconModule,
    MatDialogModule
  ],
  templateUrl: './users-login-not-save.component.html',
  styleUrl: './users-login-not-save.component.scss'
})
export class UsersLoginNotSaveComponent implements OnInit{
  private routerService = inject(Router);
  private dialogRef = inject(MatDialogRef);

  ngOnInit(): void {
    this.routerService.navigate(['login'])

    setTimeout(() => {
      this.closeModalLoginNotSave();
    }, 1500);
  };

  closeModalLoginNotSave(): void{
    this.dialogRef.close();
  };
}
