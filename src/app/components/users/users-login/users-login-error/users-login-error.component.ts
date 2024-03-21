import { Component, OnInit, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogRef } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-users-login-error',
  standalone: true,
  imports: [
    MatIconModule
  ],
  templateUrl: './users-login-error.component.html',
  styleUrl: './users-login-error.component.scss'
})
export class UsersLoginErrorComponent implements OnInit{
  private dialogRef = inject(MatDialogRef);

  ngOnInit(): void {
    this.closeModalLoginError();
  };

  closeModalLoginError(): void {
    setTimeout(() => {
      this.dialogRef.close();

    }, 2500);
  };

}
