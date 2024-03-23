import { Component, Inject, OnInit, inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { Car } from '../../../models/car/car';
import { Seller } from '../../../models/seller/seller';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { SellerService } from '../../../services/seller/seller.service';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { UsersInterestFormComponent } from '../users-interest-form/users-interest-form.component';

@Component({
  selector: 'app-users-contact-info',
  standalone: true,
  imports: [
    HttpClientModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule
  ],
  providers:[
    HttpClient,
    SellerService
  ],
  templateUrl: './users-contact-info.component.html',
  styleUrl: './users-contact-info.component.scss'
})
export class UsersContactInfoComponent implements OnInit{
  constructor(@Inject(MAT_DIALOG_DATA) public data:Car){}

  ngOnInit(): void {
    this.vendedorId = this.data.vendedorId;
    this.getSellers();
  }
  public nomeVendedor!: string;
  public contatoVendedor!: string;
  public emailVendedor!: string;
  public fotoVendedor!: string;
  public vendedorId!: string;
  public sellers!: Array<Seller>;
  private sellerService = inject(SellerService);
  public seller!: Seller;
  private dialogRef = inject(MatDialogRef);
  private dialogService = inject(MatDialog);

  getSellers(): void{
    this.sellerService.getAllSellers().subscribe({
      next: (response => {
        this.sellers = response;

        this.sellers.filter((vendedor) => {
          if (vendedor.vendedorId == this.vendedorId) {
            this.nomeVendedor = vendedor.nomeVendedor;
            this.contatoVendedor = vendedor.contatoVendedor;
            this.emailVendedor = vendedor.emailVendedor;
            this.fotoVendedor = vendedor.fotoVendedor
          };
        });
      })
    });
  };

  closeModalContactInfo(): void{
    this.dialogRef.close();
  }

  openModalContact(): void{
    this.dialogService.open(UsersInterestFormComponent, {
      width: '500px',
      height: '450px'
    })
  }

}
