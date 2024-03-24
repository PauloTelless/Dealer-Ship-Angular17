import { Component, DestroyRef, inject } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { SellerService } from '../../../services/seller/seller.service';
import { Seller } from '../../../models/seller/seller';
import { MatFormField } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ToastModule } from 'primeng/toast';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MessageService } from 'primeng/api';
import { MessagesModule } from 'primeng/messages';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-seller-form',
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
  providers:[
    MessageService,
    SellerService,
    provideNativeDateAdapter()
  ],
  templateUrl: './seller-form.component.html',
  styleUrl: './seller-form.component.scss'
})
export class SellerFormComponent {
  private sellerService = inject(SellerService);
  private formBuilder = inject(FormBuilder);
  private messageService = inject(MessageService);
  private dialoRef = inject(MatDialogRef);
  private destroyRef = inject(DestroyRef);
  public salarioFormatado!: string;

  formPostSeller = this.formBuilder.group({
    nomeVendedor: ['', Validators.required],
    cpfVendedor: ['', Validators.required],
    contatoVendedor: ['', Validators.required],
    emailVendedor: ['', Validators.required],
    estadoVendedor: ['', Validators.required],
    enderecoVendedor: ['', Validators.required],
    cidadeVendedor: ['', Validators.required],
    fotoVendedor: ['', Validators.required],
    dataNascimentoVendedor: ['', Validators.required],
    dataAdmissao: ['', Validators.required],
    salarioVendedor: ['', Validators.required],
  })

  postSellerSubmit(): void{
    if (this.formPostSeller.valid) {
      this.sellerService.postSeller(this.formPostSeller.value as Seller).pipe(
        takeUntilDestroyed(
          this.destroyRef
        )
      ).subscribe({
        next: (() => {
          this.messageService.add({
            severity: 'success',
            summary: 'Contratado',
            detail: 'Vendedor contratado',
            life: 2000
          });
          setTimeout(() => {
            this.dialoRef.close();
          }, 2000);
        }),
        error: (() => {
          this.messageService.add({
            severity: 'error',
            summary: 'Error',
            detail: 'Não foi possível contratar',
            life: 2000
          });
        })
      });
    };
  };

  formatarCpf(event: any): void{
    const input = event.target as HTMLInputElement;

    let value = input.value.replace(/\D/g, '');

    if (value.length > 0) {
      value = `${value.substring(0,3)}.${value.substring(3,6)}.${value.substring(6,9)}-${value.substring(9,11)}`;
    };

    input.value = value;

    this.formPostSeller.patchValue({cpfVendedor: value});
  };

  formatarContato(event: any): void{
    const input = event.target as HTMLInputElement;

    let value = input.value.replace(/\D/g, '');

    if (value.length > 0) {
      value = `(${value.substring(0, 2)}) ${value.substring(2, 7)}-${value.substring(7, 15)}`;
    };

    input.value = value;

    this.formPostSeller.patchValue({contatoVendedor: value});
  };

  formatarSalario(event: any): void{
    const input = event.target as HTMLInputElement;

    let value = input.value.replace(/\D/g, '');

    this.salarioFormatado = parseFloat(value).toLocaleString('pt-BR');

    if (this.salarioFormatado === 'NaN') {
      this.salarioFormatado = '0';
    }

    this.formPostSeller.patchValue({salarioVendedor: this.salarioFormatado});

  };

  closeModalSellerForm(): void{
    this.dialoRef.close();
  };

}
