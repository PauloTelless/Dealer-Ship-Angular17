import { Component, Input, OnInit, inject } from '@angular/core';
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


@Component({
  selector: 'app-users',
  standalone: true,
  imports: [
    ToolBarComponent,
    CommonModule,
    CardModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule
  ],
  providers:[
    UserService
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
      height: '300px',
      data: {userId: this.userId, userName: this.userName}
    });
  };

}
