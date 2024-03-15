import { Component, Inject, OnInit, inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Car } from '../../../models/car/car';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { SellerService } from '../../../services/seller/seller.service';
import { Seller } from '../../../models/seller/seller';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-cars-info',
  standalone: true,
  imports: [
    MatIconModule,
    MatButtonModule
  ],
  providers:[
    SellerService,
  ],
  templateUrl: './cars-info.component.html',
  styleUrl: './cars-info.component.scss'
})
export class CarsInfoComponent implements OnInit{
  public nomeVendedor!: string
  public contatoVendedor!: string
  public emailVendedor!: string
  public fotoVendedor!: string
  public precoCarro = this.data.precoCarro as any;
  public sellers!: Array<Seller>
  private sellerService = inject(SellerService);

  constructor(@Inject(MAT_DIALOG_DATA) public data:Car){}
  ngOnInit(): void {
    this.getSellers();
  }

  getSellers(): void{
    this.sellerService.getAllSellers().subscribe({
      next: (response => {
        this.sellers = response
        this.sellers.filter(vendendor => {
          if (vendendor.vendedorId == this.data.vendedorId) {
            this.nomeVendedor = vendendor.nomeVendedor
            this.contatoVendedor = vendendor.contatoVendedor
            this.emailVendedor = vendendor.emailVendedor
            this.fotoVendedor = vendendor.fotoVendedor
          }
        })
      })
    })
  }
}
