import { Component, OnInit, inject } from '@angular/core';
import { Car } from '../../models/car';
import { CarService } from '../../services/car.service';
import { ButtonModule } from 'primeng/button';
import { CarouselModule } from 'primeng/carousel';
import { MatButtonModule } from '@angular/material/button'
import { MatIconModule } from '@angular/material/icon'

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    ButtonModule,
    CarouselModule,
    MatButtonModule,
    MatIconModule
  ],
  providers:[
    CarService
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit{
  public responsiveOptions: any[] | undefined;
  private carService = inject(CarService);
  public carsDatas!: Array<Car>;

  ngOnInit(): void {
    this.getCars();
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
        console.log(this.carsDatas)
      })
    })
  }
}
