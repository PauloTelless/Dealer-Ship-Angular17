import { Component, Inject, inject } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { UsersLogoutComponent } from '../users-logout.component';
import { UserService } from '../../../../../services/user/user.service';

@Component({
  selector: 'app-users-logout-success',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    FormsModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [
  ],
  templateUrl: './users-logout-success.component.html',
  styleUrl: './users-logout-success.component.scss'
})
export class UsersLogoutSuccessComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public userName:string){}

  private formBuilder = inject(FormBuilder);
  private dialogRef = inject(MatDialogRef);



  logoutForm = this.formBuilder.group({
    userName: [this.userName.toLowerCase(), Validators.required],
    password: ['', Validators.required]
  })

  logoutSubmit(): void{

  }

  closeModalLogout(): void{
    this.dialogRef.close();
  };
}
