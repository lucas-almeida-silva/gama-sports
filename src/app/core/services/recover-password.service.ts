import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import RecoverPassword from 'src/app/shared/models/RecoverPassword';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RecoverPasswordService {
  private baseURL = `${environment.apiBaseUrl}/reset-password`;
  constructor(private http: HttpClient) { }

  recoverPassword(recoverPassword: RecoverPassword) {
    return this.http.post(`${this.baseURL}`, recoverPassword);
  }
}
