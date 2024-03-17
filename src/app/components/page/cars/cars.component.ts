import { Component, inject, OnInit } from '@angular/core';
import { ToolBarComponent } from '../../../shared/tool-bar/tool-bar.component';
import { CardModule } from 'primeng/card';
import { Car } from '../../../models/car/car';
import { CarService } from '../../../services/car/car.service';
import { DataViewModule } from 'primeng/dataview';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { CarsFormComponent } from '../../cars/cars-form/cars-form.component';
import { CarsEditComponent } from '../../cars/cars-edit/cars-edit.component';

@Component({
  selector: 'app-cars',
  standalone: true,
  imports: [
    ToolBarComponent,
    CardModule,
    DataViewModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule
  ],
  templateUrl: './cars.component.html',
  styleUrl: './cars.component.scss'
})
export class CarsComponent implements OnInit{
  private carService = inject(CarService);
  private dialogService = inject(MatDialog);
  public carsDatas!: Array<Car>;

  ngOnInit(): void {
    this.getCars();
  };

  getCars(): void{
    this.carService.getAllCars().subscribe({
      next: (response => {
        this.carsDatas = response
      })
    });
  };

  openCarsForm(): void{
    this.dialogService.open(CarsFormComponent, {
      width: '900px',
      height: '550px'
    });
  };

  openModalCarEdit(car: Car): void{
    this.dialogService.open(CarsEditComponent, {
      width: '900px',
      height: '550px',
      data: car
    })
  }
}
