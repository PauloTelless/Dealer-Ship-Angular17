import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environment } from '../../environments/environments';
import { Observable } from 'rxjs';
import { Categorie } from '../../models/categorie/categorie';

@Injectable({
  providedIn: 'root'
})
export class CategorieService {
  private httpClient = inject(HttpClient);
  private API_URL = environment.API_URL;
  constructor() { }

  getAllCategories(): Observable<Array<Categorie>>{
    return this.httpClient.get<Array<Categorie>>(`${this.API_URL}/categorias`)
  }
}
