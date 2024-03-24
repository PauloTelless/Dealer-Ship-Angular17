import { Component, DestroyRef, Inject, OnInit, inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { Car } from '../../../models/car/car';
import { Seller } from '../../../models/seller/seller';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { SellerService } from '../../../services/seller/seller.service';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { UsersInterestFormComponent } from '../users-interest-form/users-interest-form.component';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

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

  private sellerService = inject(SellerService);
  private dialogRef = inject(MatDialogRef);
  private dialogService = inject(MatDialog);
  private destroyRef = inject(DestroyRef);
  public contatoVendedor!: string;
  public nomeVendedor!: string;
  public emailVendedor!: string;
  public fotoVendedor!: string;
  public vendedorId!: string;
  public sellers!: Array<Seller>;
  public seller!: Seller;

  ngOnInit(): void {
    this.vendedorId = this.data.vendedorId;
    this.getSellers();
  }

  getSellers(): void{
    this.sellerService.getAllSellers().pipe(
      takeUntilDestroyed(
        this.destroyRef
      )
    ).subscribe({
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
  };

  openModalContact(): void{
    this.dialogService.open(UsersInterestFormComponent, {
      width: '500px',
      height: '450px'
    });
  };

}
