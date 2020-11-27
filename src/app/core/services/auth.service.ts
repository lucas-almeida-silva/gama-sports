import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import Login from 'src/app/shared/models/Login';
import LoggedUser from 'src/app/shared/models/LoggedUser';
import { Observable } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = `${environment.apiBaseUrl}/login`;
  private jwtService = new JwtHelperService();

  constructor(private httpClient: HttpClient) { }

  login(login: Login): Observable<LoggedUser> {
    return this.httpClient.post<LoggedUser>(this.baseUrl, login);
  }

  logout() {
    localStorage.removeItem("user");
  }

  isLoggedUser(): boolean {
    const loggedUser = localStorage.getItem('user');

    if(!loggedUser)
      return false;

    const { token } = JSON.parse(loggedUser) as LoggedUser;

    return !this.jwtService.isTokenExpired(token);
  }

  getUser(): LoggedUser {
    const loggedUser = localStorage.getItem('user');

    return JSON.parse(loggedUser) as LoggedUser;
  }
}
