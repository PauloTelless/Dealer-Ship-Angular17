import { Component, Inject, OnInit, inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Seller } from '../../../models/seller/seller';
import { Car } from '../../../models/car/car';
import { CarService } from '../../../services/car/car.service';

@Component({
  selector: 'app-seller-info',
  standalone: true,
  imports: [

  ],
  providers:[
    CarService
  ],
  templateUrl: './seller-info.component.html',
  styleUrl: './seller-info.component.scss'
})
export class SellerInfoComponent{

}
