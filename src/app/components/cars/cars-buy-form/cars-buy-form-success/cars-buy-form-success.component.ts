import { Component, DestroyRef, Inject, OnInit, inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { Car } from '../../../../models/car/car';
import { CarService } from '../../../../services/car/car.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-cars-buy-form-success',
  standalone: true,
  imports: [
    MatIconModule,
    MatDialogModule
  ],
  providers:[
    CarService
  ],
  templateUrl: './cars-buy-form-success.component.html',
  styleUrl: './cars-buy-form-success.component.scss'
})
export class CarsBuyFormSuccessComponent implements OnInit{

  private dialogRef = inject(MatDialogRef);
  private destroyRef = inject(DestroyRef);
  private carService = inject(CarService);

  constructor(@Inject(MAT_DIALOG_DATA) public data:Car){}

  ngOnInit(): void {
    this.sellSuccess();
    this.closeModalCarsBuySuccess();
  };

  closeModalCarsBuySuccess(): void{
    setTimeout(() => {
      this.dialogRef.close();
    }, 2000);
  };

  sellSuccess(): void{
    this.carService.deleteCar(this.data.carroId).pipe(
      takeUntilDestroyed(
        this.destroyRef
      )
    ).subscribe({
      next:(() => {
        console.log(`${this.data.modeloCarro} vendido.`)
      }),
      error: (err => {
        console.log(err)
      })
    });
  };

}
