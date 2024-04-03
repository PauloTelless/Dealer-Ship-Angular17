import { Component, OnInit, inject } from '@angular/core';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-cars-buy-form-success',
  standalone: true,
  imports: [
    MatIconModule,
    MatDialogModule
  ],
  templateUrl: './cars-buy-form-success.component.html',
  styleUrl: './cars-buy-form-success.component.scss'
})
export class CarsBuyFormSuccessComponent implements OnInit{
  private dialogRef = inject(MatDialogRef);

  ngOnInit(): void {
    this.closeModalCarsBuySuccess();
  }

  closeModalCarsBuySuccess(): void{
    setTimeout(() => {
      this.dialogRef.close();
    }, 2000);
  }

}
