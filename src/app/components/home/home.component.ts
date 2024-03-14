import { Component, OnInit, inject } from '@angular/core';
import { Car } from '../../models/car';
import { CarService } from '../../services/car.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  providers:[
    CarService
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit{
  ngOnInit(): void {
    this.getCars();
  }

  private carService = inject(CarService);
  public carsDatas!: Array<Car>;


  getCars(): void{
    this.carService.getAllCars().subscribe({
      next: (carsReponse => {
        this.carsDatas = carsReponse;
        console.log(this.carsDatas)
      })
    })
  }
}
