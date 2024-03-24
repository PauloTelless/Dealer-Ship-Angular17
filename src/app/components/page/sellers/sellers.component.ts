import { Component, DestroyRef, OnInit, inject } from '@angular/core';
import { ToolBarComponent } from '../../../shared/tool-bar/tool-bar.component';
import { CardModule } from 'primeng/card';
import { SellerService } from '../../../services/seller/seller.service';
import { Seller } from '../../../models/seller/seller';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { SellerInfoComponent } from '../../sellers/seller-info/seller-info.component';
import { SellerFormComponent } from '../../sellers/seller-form/seller-form.component';
import { SellersEditComponent } from '../../sellers/sellers-edit/sellers-edit.component';
import { SellerDeleteComponent } from '../../sellers/seller-delete/seller-delete.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-administration',
  standalone: true,
  imports: [
    ToolBarComponent,
    CardModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatDialogModule,
    MatTooltipModule
  ],
  templateUrl: './sellers.component.html',
  styleUrl: './sellers.component.scss'
})
export class AdministrationComponent implements OnInit{

  private sellerService = inject(SellerService);
  private dialogService = inject(MatDialog);
  private destroyRef = inject(DestroyRef);
  public sellersDatas!: Array<Seller>;

  constructor(){}

  ngOnInit(): void {
    this.getSellers();

  };

  getSellers(): void{
    this.sellerService.getAllSellers().pipe(
      takeUntilDestroyed(
        this.destroyRef
      )
    ).subscribe({
      next: (sellerResponse => {
        this.sellersDatas = sellerResponse;
      })
    });
  };

  openModalSellerInfo(seller: Seller): void{
    this.dialogService.open(SellerInfoComponent, {
      maxWidth: '900px',
      height: '500px',
      data: seller
    });
  };

  openModalSellerForm(): void{
    this.dialogService.open(SellerFormComponent, {
      width: '980px',
      height: '450px'
    });
  };

  openOpenSellerEdit(seller: Seller): void{
    this.dialogService.open(SellersEditComponent, {
      width: '980px',
      height: '450px',
      data: seller
    })
  };

  OpenSellerDelete(seller: Seller): void{
    this.dialogService.open(SellerDeleteComponent, {
      width: '500px',
      height: '300px',
      data: seller
    })
  }

}
