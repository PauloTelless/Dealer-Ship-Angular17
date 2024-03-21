import { Component, OnInit, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogRef } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-users-register-password-error',
  standalone: true,
  imports: [
    MatIconModule
  ],
  templateUrl: './users-register-password-error.component.html',
  styleUrl: './users-register-password-error.component.scss'
})
export class UsersRegisterPasswordErrorComponent implements OnInit{
  private dialogRef = inject(MatDialogRef);

  ngOnInit(): void {
    this.closeModalPasswordError();
  };

  closeModalPasswordError(): void{
    setTimeout(() => {
      this.dialogRef.close();
    }, 2500);
  };

}
