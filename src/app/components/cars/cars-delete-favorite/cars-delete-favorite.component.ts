import { Component, DestroyRef, Inject, OnInit, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { UserService } from '../../../services/user/user.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CarService } from '../../../services/car/car.service';

@Component({
  selector: 'app-cars-delete-favorite',
  standalone: true,
  imports: [
    MatButtonModule,
    MatIconModule,
    ToastModule,
    HttpClientModule
  ],
  providers:[
    UserService,
    MessageService,
    CarService,
    HttpClient
  ],
  templateUrl: './cars-delete-favorite.component.html',
  styleUrl: './cars-delete-favorite.component.scss'
})
export class CarsDeleteFavoriteComponent implements OnInit{
  constructor(@Inject(MAT_DIALOG_DATA) public data:any){}

  private userService = inject(UserService);
  private dialogRef = inject(MatDialogRef);
  private destroyRef = inject(DestroyRef);
  private messageService = inject(MessageService);
  public modeloCarro: string = this.data.modeloCarroData;
  private carroId: string = this.data.carroIdData;
  private userId!: string;

  ngOnInit(): void {
    this.userId = localStorage.getItem('userId') as string;
    this.carroId =  this.data.carroIdData;
  };

  closeModalDeleteFavorite(): void{
    this.dialogRef.close();
  };

  removeCarFavorite(): void{
    this.userService.deteleFavoriteCar(this.userId, this.carroId).pipe(
      takeUntilDestroyed(
        this.destroyRef
      )
    ).subscribe({
      next: (() => {
        this.messageService.add({
          severity: 'info',
          summary: 'Removido',
          detail: `${this.modeloCarro} foi removido da lista de favoritos`,
          life: 2000
        });
        setTimeout(() => {
          this.closeModalDeleteFavorite();
        }, 2000);
      })
    });
  };

}
