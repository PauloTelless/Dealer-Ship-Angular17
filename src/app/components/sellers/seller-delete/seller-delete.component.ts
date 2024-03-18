import { Component, Inject, inject } from '@angular/core';
import { ToolBarComponent } from '../../../shared/tool-bar/tool-bar.component';
import { CardModule } from 'primeng/card';
import { DataViewModule } from 'primeng/dataview';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { Seller } from '../../../models/seller/seller';
import { MessageService } from 'primeng/api';
import { SellerService } from '../../../services/seller/seller.service';
import { ToastModule } from 'primeng/toast';

@Component({
  selector: 'app-seller-delete',
  standalone: true,
  imports: [
    ToolBarComponent,
    CardModule,
    DataViewModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    ToastModule,
    MatIconModule
  ],
  providers:[
    SellerService,
    MessageService
  ],
  templateUrl: './seller-delete.component.html',
  styleUrl: './seller-delete.component.scss'
})
export class SellerDeleteComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data:Seller){}

  private sellerService = inject(SellerService);
  private dialogRef = inject(MatDialogRef);
  private messageService = inject (MessageService);


  deleteSeller(): void {
    this.sellerService.deleteSeller(this.data.vendedorId as string).subscribe({
      next: (response => {
        console.log(response)
        this.messageService.add({
          severity: 'success',
          summary: 'Desligado',
          detail: 'Vendedor desligado',
          life: 2000
        });
        setTimeout(() => {
          this.dialogRef.close()
        }, 2000);
      }),
      error: (() => {
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: 'Erro ao desligar',
          life: 2000
        })
      })
    });
  };

  closeModalSeller(): void{
    this.dialogRef.close();
  };
}
