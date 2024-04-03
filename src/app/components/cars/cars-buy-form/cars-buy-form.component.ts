import { Component, Inject, OnInit, inject } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { ToastModule } from 'primeng/toast';
import { Car } from '../../../models/car/car';
import { provideNativeDateAdapter } from '@angular/material/core';

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
    provideNativeDateAdapter()
  ],
  templateUrl: './cars-buy-form.component.html',
  styleUrl: './cars-buy-form.component.scss'
})
export class CarsBuyFormComponent{

  private dialogRef = inject(MatDialogRef);
  private formBuilder = inject(FormBuilder);
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

  closeModalBuyForm(): void{
    this.dialogRef.close();
  }
}
