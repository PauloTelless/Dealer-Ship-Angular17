import { Component, OnInit, inject } from '@angular/core';
import { Car } from '../../../models/car/car';
import { CarService } from '../../../services/car/car.service';
import { ButtonModule } from 'primeng/button';
import { CarouselModule } from 'primeng/carousel';
import { MatButtonModule } from '@angular/material/button'
import { MatIconModule } from '@angular/material/icon'
import { ToolBarComponent } from '../../../shared/tool-bar/tool-bar.component';
import { MatDialog, MatDialogModule } from '@angular/material/dialog'
import { CarsInfoComponent } from '../../cars/cars-info/cars-info.component';
import { MarcaService } from '../../../services/marca/marca.service';
import { Marca } from '../../../models/marca/marca';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    ButtonModule,
    CarouselModule,
    MatButtonModule,
    MatIconModule,
    ToolBarComponent,
    MatDialogModule
  ],
  providers:[
    CarService,
    MarcaService
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit{

  public responsiveOptions: any[] | undefined;
  public carsDatas!: Array<Car>;
  public marcasDatas!: Array<Marca>;
  private carService = inject(CarService);
  private marcaService = inject(MarcaService);
  private dialogService = inject(MatDialog);

  ngOnInit(): void {
    this.getCars();
    this.getMarcas();
    this.responsiveOptions = [
      {
          breakpoint: '1199px',
          numVisible: 1,
          numScroll: 1
      },
      {
          breakpoint: '991px',
          numVisible: 2,
          numScroll: 1
      },
      {
          breakpoint: '767px',
          numVisible: 1,
          numScroll: 1
      }
  ];
  }

  getCars(): void{
    this.carService.getAllCars().subscribe({
      next: (carsReponse => {
        this.carsDatas = carsReponse;
      })
    });
  };

  getMarcas(): void{
    this.marcaService.getAllMarcas().subscribe({
      next: (response => {
        this.marcasDatas = response
      })
    });
  };

  openModalCarInfo(carInfo: Car): void{
    this.dialogService.open(CarsInfoComponent, {
      width: '600px',
      height: '550px',
      data: carInfo
    });
  };
}
