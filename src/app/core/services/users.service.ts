import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import User from 'src/app/shared/models/User';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private baseUrl = `${environment.apiBaseUrl}/users`;

  constructor(private httpClient: HttpClient) { }

  postUser(user: User) {
    return this.httpClient.post(this.baseUrl, user);
  }
}
