import { Component, OnInit, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { TriStateCheckboxChangeEvent, TriStateCheckboxModule } from 'primeng/tristatecheckbox';
import { UsersLoginNotSaveComponent } from '../users-login-not-save/users-login-not-save.component';

@Component({
  selector: 'app-users-login-save',
  standalone: true,
  imports: [
    MatButtonModule,
    TriStateCheckboxModule,
    MatIconModule
  ],
  templateUrl: './users-login-save.component.html',
  styleUrl: './users-login-save.component.scss'
})
export class UsersLoginSaveComponent implements OnInit{
  private dialogRef = inject(MatDialogRef);
  private dialogService = inject(MatDialog);
  private token!: string;
  private buttonCheck!: boolean;

  ngOnInit(): void {
    this.token = localStorage.getItem('token') as string;
  };

  closeModalLoginSave(): void {
    if (this.buttonCheck) {
      localStorage.setItem('token', this.token);
    } else {
      localStorage.removeItem('token');
      setTimeout(() => {
        this.dialogService.open(UsersLoginNotSaveComponent, {
          width: '280px',
          height: '250px'
        })
      }, 5000);
    }
    this.dialogRef.close();
  };

  isChecked(event: TriStateCheckboxChangeEvent): void {
    this.buttonCheck = event.value === null ? false : event.value;
  };

}
