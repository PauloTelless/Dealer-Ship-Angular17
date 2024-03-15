import { environment } from './../../environments/environments';
import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Seller } from '../../models/seller/seller';

@Injectable({
  providedIn: 'root'
})
export class SellerService {

  private API_URL = environment.API_URL;
  private httpClient = inject(HttpClient);

  constructor() { }

  getAllSellers(): Observable<Array<Seller>>{
    return this.httpClient.get<Array<Seller>>(`${this.API_URL}/vendedores`)
  }

}
