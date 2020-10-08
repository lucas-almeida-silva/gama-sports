import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import ForgotPassword from 'src/app/shared/models/ForgotPassword';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ForgotPasswordService {
  private baseUrl = `${environment.apiBaseUrl}/forgot-password`;

  constructor(private httpClient: HttpClient) { }

  postEmail(forgotPassword: ForgotPassword) {
    return this.httpClient.post(this.baseUrl, forgotPassword);
  }
}
