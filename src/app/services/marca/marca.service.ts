import { Injectable, inject } from '@angular/core';
import { environment } from '../../environments/environments';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Marca } from '../../models/marca/marca';

@Injectable({
  providedIn: 'root'
})
export class MarcaService {
  private API_URL = environment.API_URL;
  private httpClient = inject(HttpClient);

  getAllMarcas(): Observable<Array<Marca>>{
    return this.httpClient.get<Array<Marca>>(`${this.API_URL}/marcas`);
  };

}
