import { environment } from '../../environments/environments';
import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from '../../models/car/car';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  private httpClient = inject(HttpClient);
  private API_URL = environment.API_URL

  constructor() { }

  getAllCars(): Observable<Array<Car>>{
    return this.httpClient.get<Array<Car>>(`${this.API_URL}/carros`);
  }

  postCar(car: Car): Observable<Car>{
    return this.httpClient.post<Car>(`${this.API_URL}/carros`, car);
  }

  putCar(carId: string, car: Car): Observable<Car>{
    return this.httpClient.put<Car>(`${this.API_URL}/carros/${carId}`, car);
  }

}
