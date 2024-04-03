import { Component, Inject, inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Car } from '../../../models/car/car';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CarsBuyFormComponent } from '../cars-buy-form/cars-buy-form.component';

@Component({
  selector: 'app-cars-buy',
  standalone: true,
  imports: [
    MatButtonModule,
    MatIconModule
  ],
  templateUrl: './cars-buy.component.html',
  styleUrl: './cars-buy.component.scss'
})
export class CarsBuyComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data:Car){}

  private dialogRef = inject(MatDialogRef);
  private dialogService = inject(MatDialog);
  public modeloCarro = this.data.modeloCarro;

  closeModalCarsBuy(): void{
    this.dialogRef.close();
  };

  openModalCarBuyForm():void {
    this.closeModalCarsBuy();

    this.dialogService.open(CarsBuyFormComponent, {
      width: '950px',
      height: '630px',
      data: this.data
    });
  };

}
