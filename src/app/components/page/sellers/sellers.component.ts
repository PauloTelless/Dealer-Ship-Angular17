import { Component, OnInit, inject } from '@angular/core';
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

@Component({
  selector: 'app-administration',
  standalone: true,
  imports: [
    ToolBarComponent,
    CardModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatDialogModule
  ],
  templateUrl: './sellers.component.html',
  styleUrl: './sellers.component.scss'
})
export class AdministrationComponent implements OnInit{

  private sellerService = inject(SellerService);
  private dialogService = inject(MatDialog);
  public sellersDatas!: Array<Seller>;

  constructor(){}

  ngOnInit(): void {
    this.getSellers();

  };

  getSellers(): void{
    this.sellerService.getAllSellers().subscribe({
      next: (sellerResponse => {
        this.sellersDatas = sellerResponse;
      })
    });
  };

  openModalSellerInfo(seller: Seller): void{
    this.dialogService.open(SellerInfoComponent, {
      width: '900px',
      height: '500px',
      data: seller
    });
  };

  openModalSellerForm(): void{
    this.dialogService.open(SellerFormComponent, {
      width: '980px',
      height: '450px'
    })
  }

}
