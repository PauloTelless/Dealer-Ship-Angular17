import { UserConfiguration } from './../../../../models/user/userConfiguration';
import { Component, OnInit, } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { UserService } from '../../../../services/user/user.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { UsersConfigurationSucessComponent } from './users-configuration-sucess/users-configuration-sucess.component';
import { CommonModule } from '@angular/common';
import { TransformToPhoneFormatPipe } from '../../../../shared/pipes/transform-to-phone-format.pipe';

@Component({
  selector: 'app-users-configuration',
  standalone: true,
  imports: [
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    FormsModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule,
    TransformToPhoneFormatPipe
  ],
  providers: [
    UserService,
    HttpClient
  ],
  templateUrl: './users-configuration.component.html',
  styleUrl: './users-configuration.component.scss'
})
export class UsersConfigurationComponent implements OnInit{
  userConfiguration!: FormGroup;
  userName!: string;
  userId!: string;
  user!: UserConfiguration;
  public number = '75999632132'
  constructor(
    private dialogRef: MatDialogRef<UsersConfigurationComponent>,
    private formBuilder: FormBuilder,
    private userService: UserService,
    private dialogService: MatDialog
  ) {}

  ngOnInit(): void {
    this.userName = localStorage.getItem('userName') || '';
    this.userId = localStorage.getItem('userId') || '';
    this.getUser(this.userId);

    this.userConfiguration = this.formBuilder.group({
      usuarioId: [this.userId],
      usuarioNomeCompleto: [this.user?.usuarioNomeCompleto || '', Validators.required],
      usuarioNome: [this.userName || ''],
      usuarioCpf: [this.user?.usuarioCpf || '', Validators.required],
      usuarioEmail: [this.user?.usuarioEmail || '', Validators.required],
      usuarioContato: [this.user?.usuarioContato || '', Validators.required],
      usuarioEndereco: [this.user?.usuarioEndereco || '', Validators.required],
    });
  }

  closeModalUserConfiguration(): void {
    this.dialogRef.close();
  }

  getUser(userId: string): void {
    this.userService.getUser(userId).subscribe({
      next: (response) => {
        this.user = response;
        this.userConfiguration.patchValue({
          usuarioNomeCompleto: this.user?.usuarioNomeCompleto,
          usuarioCpf: this.user?.usuarioCpf,
          usuarioEmail: this.user?.usuarioEmail,
          usuarioContato: this.user?.usuarioContato,
          usuarioEndereco: this.user?.usuarioEndereco,
        });
      },
      error: (error) => {
        console.error('Error getting user:', error);
      },
    });
  }

  saveConfigurationUser(): void {
    if (this.userConfiguration.valid && this.userConfiguration.value) {
      this.userService.putUserConfiguration(this.userId, this.userConfiguration.value).subscribe({
        next: () => {
          this.dialogRef.close()
          this.dialogService.open(UsersConfigurationSucessComponent, {
            width: '250px',
            height: '250px'
          })
        },
        error: (error) => {
          console.error('Error saving user configuration:', error);
        },
      });
    };
  };

  formatarTelefone(event: any) {
    const input = event.target as HTMLInputElement;
    let value = input.value.replace(/\D/g, '');
    if (value.length > 0) {
      value = `(${value.substring(0, 2)}) ${value.substring(2, 7)}-${value.substring(7, 11)}`;
    }
    input.value = value;
    this.userConfiguration.patchValue({ usuarioContato: value });
  };

  formatarCpf(event: any){
    const input = event.target as HTMLInputElement;

    let value = input.value.replace(/\D/g, '');

    if (value.length > 0) {
      value = `${value.substring(0,3)}.${value.substring(3, 6)}.${value.substring(6, 9)}-${value.substring(9, 11)}`
    };

    input.value = value;
    this.userConfiguration.patchValue({usuarioCpf: value});
  };

}
