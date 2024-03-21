import { CategorieService } from './../../../services/categorie/categorie.service';
import { Component, Inject, OnInit, inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { Car } from '../../../models/car/car';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { SellerService } from '../../../services/seller/seller.service';
import { Seller } from '../../../models/seller/seller';
import { CommonModule } from '@angular/common';
import { Categorie } from '../../../models/categorie/categorie';
import { UsersInterestFormComponent } from '../../users/users-interest-form/users-interest-form.component';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
  selector: 'app-cars-info',
  standalone: true,
  imports: [
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    CommonModule,
    MatTooltipModule
  ],
  providers:[
    SellerService,
    CategorieService
  ],
  templateUrl: './cars-info.component.html',
  styleUrl: './cars-info.component.scss'
})
export class CarsInfoComponent implements OnInit{
  public nomeVendedor!: string;
  public contatoVendedor!: string;
  public emailVendedor!: string;
  public fotoVendedor!: string;
  public precoCarro = this.data.precoCarro as any;
  public anoLancamento = new Date();
  public sellers!: Array<Seller>;
  public categories!: Array<Categorie>;
  public categoria!: string;
  public anoLancamentoFormatada: string = '';
  private sellerService = inject(SellerService);
  private categorieService = inject(CategorieService);
  private dialogRef = inject(MatDialogRef)
  private dialogService = inject(MatDialog)

  constructor(@Inject(MAT_DIALOG_DATA) public data:Car){}
  ngOnInit(): void {
    this.getSellers();
    this.getCategories();

    this.data.anoLancamento = this.data.anoLancamento.split('T')[0]

    this.anoLancamentoFormatada = `${this.data.anoLancamento.split('-')[2]}/${this.data.anoLancamento.split('-')[1]}/${this.data.anoLancamento.split('-')[0]}`
  };


  getSellers(): void{
    this.sellerService.getAllSellers().subscribe({
      next: (response => {
        this.sellers = response;
        this.sellers.filter(vendendor => {
          if (vendendor.vendedorId == this.data.vendedorId) {
            this.nomeVendedor = vendendor.nomeVendedor;
            this.contatoVendedor = vendendor.contatoVendedor;
            this.emailVendedor = vendendor.emailVendedor;
            this.fotoVendedor = vendendor.fotoVendedor;
          };
        });
      })
    });
  };

  getCategories(): void{
    this.categorieService.getAllCategories().subscribe({
      next: (response => {
        this.categories = response.filter(categoriaFiltrada => {
          if (categoriaFiltrada.categoriaId == this.data.categoriaId) {
            this.categoria = categoriaFiltrada.nomeCategoria;
          };
        });
      })
    });
  };

  openModalInterestContact(nomeVendedor: string): void{
    this.dialogService.open(UsersInterestFormComponent, {
      width: '500px',
      height: '450px',
      data: nomeVendedor
    })
  }

  closeModalCarInfo(): void{
    this.dialogRef.close()
  };
}
