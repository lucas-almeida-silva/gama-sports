import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import ProductItem from '../models/ProductItem';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private baseUrl = `${environment.apiBaseUrl}/products`;

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<ProductItem[]> {
    return this.httpClient.get<ProductItem[]>(this.baseUrl);
  }
}
