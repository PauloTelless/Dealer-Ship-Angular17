import { Component, Inject, inject } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { UsersInterestFormSuccessComponent } from '../users-interest-form-success/users-interest-form-success.component';

@Component({
  selector: 'app-users-interest-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    FormsModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatIconModule
  ],
  templateUrl: './users-interest-form.component.html',
  styleUrl: './users-interest-form.component.scss'
})
export class UsersInterestFormComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public nomeVendedor: string){}

  private dialogRef = inject(MatDialogRef);
  private dialogService = inject(MatDialog)
  private formBuilder = inject(FormBuilder);

  interestForm = this.formBuilder.group({
    nameUser: ['', Validators.required],
    contactUser: ['', Validators.required],
    emailUser: ['']
  });

  interestFormSubmit(): void{
    if (this.interestForm.valid && this.interestForm.value) {
      this.dialogService.open(UsersInterestFormSuccessComponent, {
        width: '450px',
        height: '380px',
        data: this.nomeVendedor
      });

      this.dialogRef.close();
    };
  };

  closeModalInterest(): void{
    this.dialogRef.close();
  };

};
