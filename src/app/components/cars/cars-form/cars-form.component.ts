import { CarService } from './../../../services/car/car.service';
import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input'
import { Car } from '../../../models/car/car';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { Categorie } from '../../../models/categorie/categorie';
import { CategorieService } from '../../../services/categorie/categorie.service';
import { SellerService } from '../../../services/seller/seller.service';
import { Seller } from '../../../models/seller/seller';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-cars-form',
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
    CategorieService,
    SellerService,
    MessageService,
    provideNativeDateAdapter()
  ],
  templateUrl: './cars-form.component.html',
  styleUrl: './cars-form.component.scss'
})
export class CarsFormComponent implements OnInit{
  ngOnInit(): void {
    this.getCategories();
    this.getSellers();
  }

  private messageService = inject(MessageService);
  private formBuilder = inject(FormBuilder);
  private carService = inject(CarService);
  private categorieService = inject(CategorieService);
  private sellerService = inject (SellerService);
  private dialogRef = inject(MatDialogRef);
  private destroyRef = inject(DestroyRef);
  public categoriesDatas!: Array<Categorie>;
  public sellersDatas!: Array<Seller>;
  public quilometragemFormatada!: string;
  public precoFormatado!: string;
  public statesOptions: Array<any> =  [
    {estado: 'Novo'},
    {estado: 'Usado'},
    {estado: 'Recondicionado'},
  ]

  carForm = this.formBuilder.group({
    modeloCarro: ['', Validators.required],
    marcaCarro: ['', Validators.required],
    corCarro: ['', Validators.required],
    motorCarro: ['', Validators.required],
    consumoCarro: ['', Validators.required],
    quilometragemCarro: ['', Validators.required],
    estadoCarro: ['', Validators.required],
    imagemCarro: ['', Validators.required],
    precoCarro: ['', Validators.required],
    placaCarro: ['', Validators.required],
    anoCarro: ['', Validators.required],
    quantidadeDisponivel: [0, Validators.required],
    anoLancamento: ['', Validators.required],
    categoriaId: ['', Validators.required],
    vendedorId: [''],
  })


  carFormSubmit(): void{
    if (this.carForm.value && this.carForm.valid) {
      this.carService.postCar(this.carForm.value as Car).pipe(
        takeUntilDestroyed(
          this.destroyRef
        )
      ).subscribe({
        next: (() => {
          this.messageService.add({
            severity: 'success',
            summary: 'Adicionado',
            detail: 'Veículo adicionado !',
            life: 2000
          })
          setTimeout(() => {
            this.dialogRef.close()
          }, 1500);
        }),
        error: (erro => {
          console.log(erro)
          this.messageService.add({
            severity: 'error',
            summary: 'Erro',
            detail: 'Erro ao editar',
            life: 2000
          });
        })
      });
    };
  };

  getCategories(): void{
    this.categorieService.getAllCategories().pipe(
      takeUntilDestroyed(
        this.destroyRef
      )
    ).subscribe({
      next: (response => {
        this.categoriesDatas = response;
      })
    });
  };

  getSellers(): void{
    this.sellerService.getAllSellers().subscribe({
      next: (response => {
        this.sellersDatas = response;
      })
    });
  };

  formatarPreco(event: any){
    const input = event.target as HTMLInputElement;

    let value = input.value.replace(/\D/g, '');

    this.precoFormatado = parseFloat(value).toLocaleString('pt-BR');

    if (this.precoFormatado === 'NaN') {
      this.precoFormatado = '0';
    };

    input.value = this.precoFormatado;

    this.carForm.patchValue({precoCarro: this.precoFormatado});
  };

  formatarQuilometragem(event: any) {
    const input = event.target as HTMLInputElement;
    let value = input.value.replace(/\D/g, '');

    this.quilometragemFormatada = parseFloat(value).toLocaleString('pt-BR')

    if (this.quilometragemFormatada === 'NaN') {
      this.quilometragemFormatada = '0'
    }

    input.value = this.quilometragemFormatada;
    this.carForm.patchValue({ quilometragemCarro: this.quilometragemFormatada });
  };


  closeCarForm(): void{
    this.dialogRef.close()
  };

}

