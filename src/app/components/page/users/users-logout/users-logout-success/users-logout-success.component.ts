import { Component, Inject, inject } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { UserService } from '../../../../../services/user/user.service';
import { UserLogin } from '../../../../../models/user/userLogin';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users-logout-success',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    FormsModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    HttpClientModule
  ],
  providers: [
    UserService,
    HttpClient
  ],
  templateUrl: './users-logout-success.component.html',
  styleUrl: './users-logout-success.component.scss'
})
export class UsersLogoutSuccessComponent {

  private formBuilder = inject(FormBuilder);
  private dialogRef = inject(MatDialogRef);
  private userService = inject(UserService);
  private routerService = inject(Router);
  private userName = localStorage.getItem('userName') as string

  logoutForm = this.formBuilder.group({
    userName: [this.userName.toLowerCase(), Validators.required],
    password: ['', Validators.required]
  })

  logoutSubmit(): void{
    try {
      this.userService.loginUser(this.logoutForm.value as UserLogin).subscribe({
        next: (() => {
          localStorage.clear();
          this.dialogRef.close();
          this.routerService.navigate(['home'])
          return alert('Deslogado com sucesso')
        })

      });

    } catch (error) {
      console.log(error);
    };

  };

  closeModalLogout(): void{
    this.dialogRef.close();
  };
}
