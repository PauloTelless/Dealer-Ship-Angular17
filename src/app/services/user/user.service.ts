import { UserRegister } from '../../models/user/userRegister';
import { Injectable, inject } from '@angular/core';
import { environment } from '../../environments/environments';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserLogin } from '../../models/user/userLogin';
import { TokenUserResponse } from '../../models/user/tokenUserResponse';

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
}
