import { Component, OnInit, inject } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-users-register-error',
  standalone: true,
  imports: [
    MatIcon
  ],
  templateUrl: './users-register-error.component.html',
  styleUrl: './users-register-error.component.scss'
})
export class UsersRegisterErrorComponent implements OnInit{
  private dialogRef = inject(MatDialogRef);

  ngOnInit(): void {
    this.closeModalRegisterErro();
  };

  closeModalRegisterErro(): void{
    setTimeout(() => {
      this.dialogRef.close();
    }, 2500);
  };
}
