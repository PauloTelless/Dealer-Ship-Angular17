import { Component, DestroyRef, Inject, inject } from '@angular/core';
import { SellerService } from '../../../services/seller/seller.service';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormField } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { ToastModule } from 'primeng/toast';
import { MessagesModule } from 'primeng/messages';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MessageService } from 'primeng/api';
import { Seller } from '../../../models/seller/seller';
import { provideNativeDateAdapter } from '@angular/material/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-sellers-edit',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    FormsModule,
    MatButtonModule,
    MatIconModule,
    MatFormField,
    MatInputModule,
    MatDatepickerModule,
    ToastModule,
    MessagesModule,
    MatDialogModule
  ],
  providers: [
    SellerService,
    MessageService,
    provideNativeDateAdapter()
  ],
  templateUrl: './sellers-edit.component.html',
  styleUrl: './sellers-edit.component.scss'
})
export class SellersEditComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: Seller){}

  private sellerService = inject(SellerService);
  private formBuilder = inject(FormBuilder);
  private messageService = inject(MessageService);
  private dialoRef = inject(MatDialogRef);
  private destroyRef = inject(DestroyRef);

  formEditSeller = this.formBuilder.group({
    vendedorId: [this.data.vendedorId],
    nomeVendedor: [this.data.nomeVendedor],
    cpfVendedor: [this.data.cpfVendedor],
    contatoVendedor: [this.data.contatoVendedor],
    emailVendedor: [this.data.emailVendedor],
    estadoVendedor: [this.data.estadoVendedor],
    enderecoVendedor: [this.data.enderecoVendedor],
    cidadeVendedor: [this.data.cidadeVendedor],
    fotoVendedor: [this.data.fotoVendedor],
    dataNascimentoVendedor: [this.data.dataNascimentoVendedor],
    dataAdmissao: [this.data.dataAdmissao],
    salarioVendedor: [this.data.salarioVendedor],
  })

  putSellerSubmit(): void {
    console.log(this.data.vendedorId)
    if (this.formEditSeller.value && this.formEditSeller.valid) {
      this.sellerService.putSeller(this.data.vendedorId as string, this.formEditSeller.value as Seller).pipe(
        takeUntilDestroyed(
          this.destroyRef
        )
      ).subscribe({
        next: (() => {
          this.messageService.add({
            severity: 'success',
            summary: 'Editado',
            detail: 'Vendedor editado',
            life: 2000
          });
          setTimeout(() => {
            this.dialoRef.close();
          }, 2000);
        }),
        error: (() => {
          this.messageService.add({
            severity: 'error',
            summary: 'Erro',
            detail: 'Erro ao editar vendedor',
            life: 2000
          });
        })
      });
    };

  };

  closeModalEditSeller(): void {
    this.dialoRef.close()
  };

}
