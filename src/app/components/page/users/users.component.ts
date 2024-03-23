import { Component, OnInit, inject, model } from '@angular/core';
import { ToolBarComponent } from '../../../shared/tool-bar/tool-bar.component';
import { Car } from '../../../models/car/car';
import { UserService } from '../../../services/user/user.service';
import { UserfavoriteCarResponse } from '../../../models/user/userFavoriteCarResponse';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatDialog } from '@angular/material/dialog';
import { UsersLogoutComponent } from './users-logout/users-logout.component';
import { UsersConfigurationComponent } from './users-configuration/users-configuration.component';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { MatTooltipModule } from '@angular/material/tooltip';
import { UsersCarFavoriteInfoComponent } from '../../users/users-car-favorite-info/users-car-favorite-info.component';
import { UsersContactInfoComponent } from '../../users/users-contact-info/users-contact-info.component';
import { UsersInterestFormComponent } from '../../users/users-interest-form/users-interest-form.component';



@Component({
  selector: 'app-users',
  standalone: true,
  imports: [
    ToolBarComponent,
    CommonModule,
    CardModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    ToastModule,
    MatTooltipModule
  ],
  providers:[
    UserService,
    MessageService
  ],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})
export class UsersComponent implements OnInit{

  constructor(){}

  private dialogService = inject(MatDialog);
  private userService = inject(UserService);
  public carsListFavorite: Array<Car> = [];
  public userName!: string;
  public userId!: string;
  public carsFavorite!: Array<UserfavoriteCarResponse>;
  public usuarioId!: string;
  private messagService = inject(MessageService);

  ngOnInit(): void {
    this.getFavoritesCars();
    this.getUserName();
    this.userId = localStorage.getItem('userId') as string
  };

  getUserName(): void{
    if (typeof localStorage != 'undefined') {
      this.userName = localStorage.getItem('userName')?.toUpperCase() as string
    };
  };

  getFavoritesCars(): void{
    this.userService.getCarsFavorite().subscribe({
      next: (response) => {
        this.carsFavorite = response.filter((user) => user.usuarioId === localStorage.getItem('userId') as string);

        this.carsFavorite.forEach((user) => {
          user.carrosFavoritados.forEach((car) => {
            this.carsListFavorite.push(car);
          });
        });

      },
      error: (error) => {
        console.error('Ocorreu um erro ao obter os carros favoritos:', error);
      }
    });
  };

  openModelUserConfiguration(): void{
    this.dialogService.open(UsersConfigurationComponent, {
      width: '900px',
      height: '500px',
      data: this.userId
    })
  };

  logout(): void{
    this.dialogService.open(UsersLogoutComponent, {
      width: '300px',
      height: '300px'
    });
  };

  removeFavoriteCar(carroId: string, modeloCarro: string): void{
    this.userService.deteleFavoriteCar(this.userId, carroId).subscribe({
      next: (() => {
        this.messagService.add({
          severity: 'info',
          summary: 'Removido',
          detail: `${modeloCarro} foi removido da lista de favoritos`,
          life: 3000
        });
      })
    });
  };

  openModalCarInfo(carro: Car): void{
    this.dialogService.open(UsersCarFavoriteInfoComponent, {
      width: '500px',
      height: '550px',
      data: carro
    });
  };

  openModalContactInfo(carro: Car): void{
    this.dialogService.open(UsersContactInfoComponent, {
      width: '400px',
      height: '450px',
      data: carro
    });
  };


}
