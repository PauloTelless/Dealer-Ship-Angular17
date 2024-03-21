import { Component, Input, OnInit, inject } from '@angular/core';
import { ToolBarComponent } from '../../../shared/tool-bar/tool-bar.component';
import { Car } from '../../../models/car/car';
import { UserService } from '../../../services/user/user.service';
import { UserfavoriteCarResponse } from '../../../models/user/userFavoriteCarResponse';
import { response } from 'express';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [
    ToolBarComponent,
    CommonModule
  ],
  providers:[
    UserService
  ],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})
export class UsersComponent implements OnInit{

  public carsListFavorite: Array<Car> = [];
  public userName!: string;
  private userService = inject(UserService);
  public carsFavorite!: Array<UserfavoriteCarResponse>;
  public usuarioId!: string;

  ngOnInit(): void {
    this.getUserName();
    this.getFavoritesCars();
  };

  getUserName(): void{
    if (typeof localStorage != undefined) {
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
  }

}
