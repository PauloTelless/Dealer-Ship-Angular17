import { Component, DestroyRef, Inject, OnInit, inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { Seller } from '../../../models/seller/seller';
import { Car } from '../../../models/car/car';
import { CarService } from '../../../services/car/car.service';
import { SellerService } from '../../../services/seller/seller.service';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-seller-info',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule
  ],
  providers:[
    SellerService,
    CarService
  ],
  templateUrl: './seller-info.component.html',
  styleUrl: './seller-info.component.scss'
})
export class SellerInfoComponent implements OnInit{

  private carService = inject(CarService);
  private dialogRef = inject(MatDialogRef);
  private destroyRef = inject(DestroyRef);
  public carsData!: Array<Car>;
  public cars: Array<Car> = [];
  public dataNascimentoVendedorFormatada: string = '';
  public dataAdmissaoFormatada: string = '';

  constructor(@Inject(MAT_DIALOG_DATA) public data:Seller){}
  ngOnInit(): void {
    this.getCars();
    this.data.dataNascimentoVendedor = this.data.dataNascimentoVendedor.split('T')[0];
    this.dataNascimentoVendedorFormatada = `${this.data.dataNascimentoVendedor.split('-')[2]}/${this.data.dataNascimentoVendedor.split('-')[1]}/${this.data.dataNascimentoVendedor.split('-')[0]}`

    this.data.dataAdmissao = this.data.dataAdmissao.split('T')[0]
    this.dataAdmissaoFormatada = `${this.data.dataAdmissao.split('-')[2]}/${this.data.dataAdmissao.split('-')[1]}/${this.data.dataAdmissao.split('-')[0]}`
  };

  getCars(): void {
    this.carService.getAllCars().pipe(
      takeUntilDestroyed(
        this.destroyRef
      )
    ).subscribe({
      next: (carros => {
        this.carsData = carros.filter(carro => {
          if (carro.vendedorId == this.data.vendedorId) {
            this.cars.push(carro);
          };

        });
      })
    });
  };

  closeModalSellerInfo(): void{
    this.dialogRef.close();
  };

}
