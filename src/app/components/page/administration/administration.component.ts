import { Component, OnInit, inject } from '@angular/core';
import { ToolBarComponent } from '../../../shared/tool-bar/tool-bar.component';
import { CardModule } from 'primeng/card';
import { SellerService } from '../../../services/seller/seller.service';
import { Seller } from '../../../models/seller/seller';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-administration',
  standalone: true,
  imports: [
    ToolBarComponent,
    CardModule,
    MatButtonModule,
    MatIconModule
  ],
  templateUrl: './administration.component.html',
  styleUrl: './administration.component.scss'
})
export class AdministrationComponent implements OnInit{

  private sellerService = inject(SellerService);
  public sellersDatas!: Array<Seller>;


  constructor(){}
  ngOnInit(): void {
   this.getSellers();
  }

  getSellers(): void{
    this.sellerService.getAllSellers().subscribe({
      next: (sellerResponse => {
        this.sellersDatas = sellerResponse;
        console.log(this.sellersDatas);
      })
    })
  }
}
