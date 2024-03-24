import { Car } from './../../../models/car/car';
import { Component, DestroyRef, Inject, inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { CarService } from '../../../services/car/car.service';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MessageService } from 'primeng/api';
import { MessagesModule } from 'primeng/messages';
import { ToastModule } from 'primeng/toast';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-cars-delete',
  standalone: true,
  imports: [
    MatButtonModule,
    MatIconModule,
    MessagesModule,
    ToastModule,
    MatDialogModule
  ],
  providers:[
    CarService,
    MessageService
  ],
  templateUrl: './cars-delete.component.html',
  styleUrl: './cars-delete.component.scss'
})
export class CarsDeleteComponent {
  private messageService = inject(MessageService)
  private carService = inject(CarService);
  private dialogRef = inject(MatDialogRef);
  private destroyRef = inject(DestroyRef);

  constructor(@Inject(MAT_DIALOG_DATA) public data: Car){}

  deleteCar(): void{
    this.carService.deleteCar(this.data.carroId).pipe(
      takeUntilDestroyed(
        this.destroyRef
      )
    ).subscribe({
      next: (() => {
       this.messageService.add({
        severity: 'success',
        summary: 'Deletado',
        detail: 'Veículo deletado',
        life: 2000
       });
       setTimeout(() => {
         this.dialogRef.close();
       }, 2000);
      }),
      error: (() => {
        this.messageService.add({
          severity: 'error',
          summary: 'Erro',
          detail: 'Erro ao deletar',
          life: 2000
         });
      })
    });
  };

  closeModalCarDelete(): void{
    this.dialogRef.close();
  };

}
