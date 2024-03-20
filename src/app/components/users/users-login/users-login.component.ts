import { Component, inject } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { UserService } from '../../../services/user/user.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { UserLogin } from '../../../models/user/userLogin';
import { Router } from '@angular/router';
import { TokenUserResponse } from '../../../models/user/tokenUserResponse';
import { MatDialog } from '@angular/material/dialog';
import { UsersLoginSucessComponent } from './users-login-sucess/users-login-sucess.component';

@Component({
  selector: 'app-users-login',
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
  templateUrl: './users-login.component.html',
  styleUrl: './users-login.component.scss'
})
export class UsersLoginComponent {
  private userService = inject(UserService);
  private formBuilder = inject(FormBuilder);
  private routerService = inject(Router);
  private dialogService = inject(MatDialog);

  formUserLogin = this.formBuilder.group({
    userName: ['', Validators.required],
    password: ['', Validators.required]
  })

  loginSubmit(): void{
    this.userService.loginUser(this.formUserLogin.value as UserLogin).subscribe({
      next: (response: TokenUserResponse) => {
        console.log(response.token)
        localStorage.setItem('token', response.token);
        localStorage.setItem('userName', this.formUserLogin.value.userName as string);
        this.dialogService.open(UsersLoginSucessComponent, {
          width: '300px',
          height: '300px'
        })
      },
      error: (() => {
        alert('Não autorizado')
      })
    });
  };

  redirecionarLogin(): void{
    this.routerService.navigate(['/register'])
  };

}
