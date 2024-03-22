import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Car } from '../../../models/car/car';

@Component({
  selector: 'app-users-car-favorite-info',
  standalone: true,
  imports: [],
  templateUrl: './users-car-favorite-info.component.html',
  styleUrl: './users-car-favorite-info.component.scss'
})
export class UsersCarFavoriteInfoComponent implements OnInit{
  constructor(@Inject(MAT_DIALOG_DATA) public data:Car){}
  public car!: Car;
  public dataLancamento!: string;
  public dataLancamentoFormatado!: string;

  ngOnInit(): void {
    this.car = this.data;
    this.dataLancamento = this.car.anoLancamento.split('T')[0];

    this.dataLancamentoFormatado = `${this.dataLancamento.split('-')[2]}/${this.dataLancamento.split('-')[1]}/${this.dataLancamento.split('-')[0]}`
  }

}
