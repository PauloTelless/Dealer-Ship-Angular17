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

  formUserLogin = this.formBuilder.group({
    userName: ['', Validators.required],
    password: ['', Validators.required]
  })

  loginSubmit(): void{
    this.userService.loginUser(this.formUserLogin.value as UserLogin).subscribe({
      next: (response: TokenUserResponse) => {
        localStorage.setItem('token', response.token);
        localStorage.setItem('userName', this.formUserLogin.value.userName as string);
        alert('Logado com sucesso!')
        this.routerService.navigate(['home']);
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
