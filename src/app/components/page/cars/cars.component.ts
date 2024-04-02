import { Component, DestroyRef, inject, OnInit } from '@angular/core';
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
import { CarsDeleteComponent } from '../../cars/cars-delete/cars-delete.component';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-cars',
  standalone: true,
  imports: [
    ToolBarComponent,
    CardModule,
    DataViewModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './cars.component.html',
  styleUrl: './cars.component.scss'
})
export class CarsComponent implements OnInit{
  private destroyRef = inject(DestroyRef);
  private carService = inject(CarService);
  private dialogService = inject(MatDialog);
  private formBuilder = inject(FormBuilder);
  public carsDatas!: Array<Car>;

  ngOnInit(): void {
    this.getCars();
    this.searchCarForm.valueChanges.subscribe(() =>
    this.searchCar())
  };

  getCars(): void{
    this.carService.getAllCars().pipe(
      takeUntilDestroyed(
        this.destroyRef
      )
    ).subscribe({
      next: (carsResponse => {
        this.carsDatas = carsResponse.map((car) => ({
          ...car,
          modeloCarro: car.modeloCarro.toUpperCase()
        }));
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
    });
  };

  openModalCarDelete(car: Car): void{
    this.dialogService.open(CarsDeleteComponent, {
      width: '500px',
      height: '300px',
      data: car
    });
  };

  searchCarForm = this.formBuilder.group({
    modeloCarro: ['']
  });

  searchCar(): void{
    const modeloCarro = this.searchCarForm.value.modeloCarro?.toUpperCase() as string;

    if (!modeloCarro || modeloCarro.trim() == '') {
      this.getCars();
      return;
    };

    this.carsDatas = this.carsDatas.filter((modeloCarroFiltrado) => {
      return modeloCarroFiltrado.modeloCarro.includes(modeloCarro);
    });
  };
}
