import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Car } from '../../../models/car/car';

@Component({
  selector: 'app-cars-info',
  standalone: true,
  imports: [],
  templateUrl: './cars-info.component.html',
  styleUrl: './cars-info.component.scss'
})
export class CarsInfoComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data:Car){}

}
