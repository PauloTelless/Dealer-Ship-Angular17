import { Component, Inject, inject } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MAT_DIALOG_DATA, MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { ToastModule } from 'primeng/toast';
import { Car } from '../../../models/car/car';
import { provideNativeDateAdapter } from '@angular/material/core';
import { CarsBuyFormSuccessComponent } from './cars-buy-form-success/cars-buy-form-success.component';
import { CarService } from '../../../services/car/car.service';

@Component({
  selector: 'app-cars-buy-form',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatDialogModule,
    MatButtonModule,
    MatIconModule,
    MatSelectModule,
    MatDatepickerModule,
    ToastModule
  ],
  providers: [
    CarService,
    provideNativeDateAdapter()
  ],
  templateUrl: './cars-buy-form.component.html',
  styleUrl: './cars-buy-form.component.scss'
})
export class CarsBuyFormComponent{

  private dialogRef = inject(MatDialogRef);
  private formBuilder = inject(FormBuilder);
  private dialogService = inject(MatDialog);
  public rgFormatado!: string;
  public opcoesPagamento = [
    {opcao: 'À vista'},
    {opcao: 'Parcelado'},
    {opcao: 'Financiado'}
  ]

  constructor(@Inject(MAT_DIALOG_DATA) public data:Car){}

  buyerForm =  this.formBuilder.group({
    nameBuyer: ['', Validators.required],
    dateBuyer: ['', Validators.required],
    rgBuyer: ['', Validators.required],
    cpfBuyer: ['', Validators.required],
    emailBuyer: ['', Validators.required],
    addressBuyer: ['', Validators.required],
    contactBuyer: ['', Validators.required],
    paymentBuyer: ['', Validators.required]
  });

  carBuyForm = this.formBuilder.group({
    modeloCarro: [this.data.modeloCarro , Validators.required],
    marcaCarro: [this.data.marcaCarro , Validators.required],
    corCarro: [this.data.corCarro , Validators.required],
    motorCarro: [this.data.motorCarro , Validators.required],
    consumoCarro: [this.data.consumoCarro , Validators.required],
    quilometragemCarro: [this.data.quilometragemCarro , Validators.required],
    anoCarro:[this.data.anoCarro, Validators.required],
    estadoCarro: [this.data.estadoCarro , Validators.required],
  });

  formatarRg(event: any): void{
    const input = event.target as HTMLInputElement;

    let value = input.value.replace(/\D/g, '');

    if (value.length > 0) {
      value = `${value.substring(0, 2)}.${value.substring(2, 5)}.${value.substring(5, 8)}-${value.substring(7, 8)}`
    };

    input.value = value;

    this.buyerForm.patchValue({rgBuyer: value});
  };

  formatarCpf(event: any): void{
    const input = event.target as HTMLInputElement;

    let value = input.value.replace(/\D/g, '');

    if (value.length > 0) {
      value = `${value.substring(0, 3)}.${value.substring(3, 6)}.${value.substring(6, 9)}-${value.substring(9, 11)}`;
    };

    input.value = value;

    this.buyerForm.patchValue({cpfBuyer: value});
  };

  formatarCelular(event: any): void{
    const input = event.target as HTMLInputElement;

    let value = input.value.replace(/\D/g, '');

    if (value.length > 0) {
      value = `(${value.substring(0, 2)}) ${value.substring(2, 7)}-${value.substring(7, 11)}`;
    };

    input.value = value;

    this.buyerForm.patchValue({contactBuyer: value})

  };

  submitEmail(): void{
    if (this.buyerForm.value) {
      this.dialogService.open(CarsBuyFormSuccessComponent, {
        width: '250px',
        height: '250px',
        data: this.data
      })
      this.dialogRef.close();
    }
  };

  closeModalBuyForm(): void{
    this.dialogRef.close();
  };

}
