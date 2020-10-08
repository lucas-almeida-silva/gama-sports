import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import Login from 'src/app/shared/models/Login';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = `${environment.apiBaseUrl}/login`;

  constructor(private httpClient: HttpClient) { }

  login(login: Login) {
    return this.httpClient.post(this.baseUrl, login);
  }
}
