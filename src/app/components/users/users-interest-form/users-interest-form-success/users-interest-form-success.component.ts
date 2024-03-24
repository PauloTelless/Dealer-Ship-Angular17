import { Component, Inject, OnInit, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-users-interest-form-success',
  standalone: true,
  imports: [
    MatButtonModule,
    MatIconModule,
    MatDialogModule
  ],
  templateUrl: './users-interest-form-success.component.html',
  styleUrl: './users-interest-form-success.component.scss'
})
export class UsersInterestFormSuccessComponent implements OnInit{
  constructor(@Inject(MAT_DIALOG_DATA) public nomeVendedor: string){}

  ngOnInit(): void {
    this.closeModals();
  };

  private dialogService = inject(MatDialog);

  closeModals(): void{
    setTimeout(() => {
      this.dialogService.closeAll();
    }, 3500);
  };

}
