import { HttpClient, HttpClientModule, provideHttpClient, withFetch } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CarService } from './services/car/car.service';
import { SellerService } from './services/seller/seller.service';
import { CategorieService } from './services/categorie/categorie.service';
import { CommonModule } from '@angular/common';
import { TransformToPhoneFormatPipe } from './shared/pipes/transform-to-phone-format.pipe';

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
    SellerService,
    TransformToPhoneFormatPipe

  ],
  host: { ngSkipHydration: 'true'},
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent{
  title = 'Dealer-Ship-App';

}
