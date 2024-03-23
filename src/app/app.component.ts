import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CarService } from './services/car/car.service';
import { SellerService } from './services/seller/seller.service';
import { CategorieService } from './services/categorie/categorie.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HttpClientModule,
    CommonModule
  ],
  providers:[
    HttpClient,
    CarService,
    CategorieService,
    SellerService
  ],
  host: { ngSkipHydration: 'true'},
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent{
  title = 'Dealer-Ship-App';

}
