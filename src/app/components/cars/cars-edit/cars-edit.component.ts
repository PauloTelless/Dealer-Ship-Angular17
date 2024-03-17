import { Component, Inject, OnInit, inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { Car } from '../../../models/car/car';
import { CarService } from '../../../services/car/car.service';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Seller } from '../../../models/seller/seller';
import { SellerService } from '../../../services/seller/seller.service';
import { CategorieService } from '../../../services/categorie/categorie.service';
import { Categorie } from '../../../models/categorie/categorie';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MessagesModule } from 'primeng/messages';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-cars-edit',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatDatepickerModule,
    MatSelectModule,
    MessagesModule,
    MatDialogModule,
    ToastModule
  ],
  providers:[
    SellerService,
    CarService,
    CategorieService,
    MessageService,
    provideNativeDateAdapter()
  ],
  templateUrl: './cars-edit.component.html',
  styleUrl: './cars-edit.component.scss'
})
export class CarsEditComponent implements OnInit{
  constructor(@Inject(MAT_DIALOG_DATA) public data:Car){}

  ngOnInit(): void {
    this.getSellers();
    this.getCategories();
  }

  private dialogRef = inject(MatDialogRef)
  private formBuilder = inject(FormBuilder);
  private carService = inject(CarService);
  private categorieService = inject(CategorieService);
  private sellerService = inject (SellerService);
  private messageService = inject(MessageService)
  public categoriesDatas!: Array<Categorie>;
  public sellersDatas!: Array<Seller>;
  public statesOptions: Array<any> =  [
    {estado: 'Novo'},
    {estado: 'Usado'},
    {estado: 'Recondicionado'},
  ]

  carFormEdit = this.formBuilder.group({
    carroId: [this.data.carroId, Validators.required],
    modeloCarro: [this.data.modeloCarro, Validators.required],
    marcaCarro: [this.data.marcaCarro, Validators.required],
    corCarro: [this.data.corCarro, Validators.required],
    motorCarro: [this.data.motorCarro, Validators.required],
    consumoCarro: [this.data.consumoCarro, Validators.required],
    quilometragemCarro: [this.data.quilometragemCarro, Validators.required],
    estadoCarro: [this.data.estadoCarro, Validators.required],
    imagemCarro: [this.data.imagemCarro, Validators.required],
    precoCarro: [this.data.precoCarro, Validators.required],
    placaCarro: [this.data.placaCarro, Validators.required],
    anoCarro: [this.data.anoCarro, Validators.required],
    quantidadeDisponivel: [this.data.quantidadeDisponivel, Validators.required],
    anoLancamento: [this.data.anoLancamento, Validators.required],
    categoriaId: [this.data.categoriaId, Validators.required],
    vendedorId: [this.data.vendedorId],
  })

  carFormEditSubmit(): void{
    this.carService.putCar(this.carFormEdit.value.carroId as string, this.carFormEdit.value as Car).subscribe({
      next: () => {
        this.messageService.add({
          severity: 'success',
          summary:'Editado',
          detail: 'Dados editados !',
          life: 2000
        });
        setTimeout(() => {
          this.dialogRef.close()
        }, 1500);
      },
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

  getCategories(): void{
    this.categorieService.getAllCategories().subscribe({
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

  closeModalCarEdit(): void{
    this.dialogRef.close();
  }

}
