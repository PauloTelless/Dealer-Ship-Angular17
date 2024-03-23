import { Component, inject } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { UserService } from '../../../services/user/user.service';
import { UserRegister } from '../../../models/user/userRegister';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { UsersRegisterSuccessComponent } from './users-register-success/users-register-success.component';
import { UsersRegisterPasswordErrorComponent } from './users-register-password-error/users-register-password-error.component';
import { UsersRegisterErrorComponent } from './users-register-error/users-register-error.component';

@Component({
  selector: 'app-users-register',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    FormsModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers:[
    UserService
  ],
  templateUrl: './users-register.component.html',
  styleUrl: './users-register.component.scss'
})
export class UsersRegisterComponent {
  private userService = inject(UserService);
  private formBuilder = inject(FormBuilder);
  private routerService = inject(Router);
  private dialogService = inject(MatDialog);

  formUserRegister = this.formBuilder.group({
    userName: ['', Validators.required],
    email: ['', Validators.required],
    password: ['', Validators.required],
    confirmPassword: ['', Validators.required]
  })

  registerFormSubmit(): void{
    if (this.formUserRegister.valid) {
      if (this.formUserRegister.value.password != this.formUserRegister.value.confirmPassword) {
        this.dialogService.open(UsersRegisterPasswordErrorComponent, {
          width: '250px',
          height: '250px'
        })
      }
      else{
        this.userService.registerUser(this.formUserRegister.value as UserRegister).subscribe({
          next: (() => {
            this.dialogService.open(UsersRegisterSuccessComponent, {
              width: '300px',
              height: '300px'
            })
          }),
          error: (() => {
            this.dialogService.open(UsersRegisterErrorComponent, {
              width: '300px',
              height: '300px'
            });
          })
        });
      };
    };
  };

  redirecionarLogin(): void{
    this.routerService.navigate(['login'])
  };

}
