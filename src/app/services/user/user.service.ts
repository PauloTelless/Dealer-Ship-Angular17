import { UserRegister } from '../../models/user/userRegister';
import { Injectable, inject } from '@angular/core';
import { environment } from '../../environments/environments';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserLogin } from '../../models/user/userLogin';
import { TokenUserResponse } from '../../models/user/tokenUserResponse';
import { UserfavoriteCarResponse } from '../../models/user/userFavoriteCarResponse';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public API_URL = environment.API_URL;
  private httpClient = inject(HttpClient);

  loginUser(user: UserLogin): Observable<TokenUserResponse> {
    return this.httpClient.post<TokenUserResponse>(`${this.API_URL}/Auth/login`, user);
  };

  registerUser(user: UserRegister): Observable<UserRegister> {
    return this.httpClient.post<UserRegister>(`${this.API_URL}/Auth/Register`, user);
  };

  favoriteCar(userId: string, carId: string): Observable<Array<UserfavoriteCarResponse>>{
    return this.httpClient.put<Array<UserfavoriteCarResponse>>(`${this.API_URL}/Users/${userId}/${carId}`, userId);
  };

  getCarsFavorite(): Observable<Array<UserfavoriteCarResponse>>{
    return this.httpClient.get<Array<UserfavoriteCarResponse>>(`${this.API_URL}/users`);
  };

}
