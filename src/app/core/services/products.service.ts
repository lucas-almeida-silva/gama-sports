import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import Product from '../../shared/models/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private baseUrl = `${environment.apiBaseUrl}/products`;

  constructor(private httpClient: HttpClient) { }

  getProducts(search?: string): Observable<Product[]> {
    if(search) {
      return this.httpClient.get<Product[]>(`${this.baseUrl}?search=${search}`);
    }

    return this.httpClient.get<Product[]>(this.baseUrl);
  }

  getProductById(id: number): Observable<Product> {
    return this.httpClient.get<Product>(`${this.baseUrl}/${id}`);
  }
}
