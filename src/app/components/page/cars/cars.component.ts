import { Component, inject, OnInit } from '@angular/core';
import { ToolBarComponent } from '../../../shared/tool-bar/tool-bar.component';
import { CardModule } from 'primeng/card';
import { Car } from '../../../models/car/car';
import { CarService } from '../../../services/car/car.service';
import { DataViewModule } from 'primeng/dataview';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-cars',
  standalone: true,
  imports: [
    ToolBarComponent,
    CardModule,
    DataViewModule,
    MatButtonModule,
    MatIconModule
  ],
  templateUrl: './cars.component.html',
  styleUrl: './cars.component.scss'
})
export class CarsComponent implements OnInit{
  private carService = inject(CarService);
  public carsDatas!: Array<Car>;

  ngOnInit(): void {
    this.getCars();
  }




  getCars(): void{
    this.carService.getAllCars().subscribe({
      next: (response => {
        this.carsDatas = response
      })
    })
  }
}
