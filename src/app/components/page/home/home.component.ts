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
import { TimelineModule } from 'primeng/timeline';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    ButtonModule,
    CarouselModule,
    MatButtonModule,
    MatIconModule,
    ToolBarComponent,
    MatDialogModule,
    TimelineModule
  ],
  providers:[
    CarService,
    MarcaService
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit{

  etapas: Array<any> = [];
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

    this.etapas = [
      { etapa: 'Pesquise', date: '15/10/2020 10:30', icon: 'pi pi-search', color: '#9C27B0', image: 'game-controller.jpg' },
      { etapa: 'Escolha', date: '15/10/2020 14:00', icon: 'pi pi-check', color: '#673AB7' },
      { etapa: 'Entre em contato', date: '15/10/2020 16:15', icon: 'pi pi-user', color: '#FF9800' },
      { etapa: 'Venda feita', date: '16/10/2020 10:00', icon: 'pi pi-money-bill', color: '#607D8B' }
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
