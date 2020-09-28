import { Component, OnInit } from '@angular/core';
import ProductItem from 'src/app/core/models/ProductItem';
import { ProductsService } from 'src/app/core/services/products.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {
  products: ProductItem[] = [];

  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {
    this.getAllProducts();
  }

  getAllProducts() {
    this.productsService.getAll().subscribe(
      (products: ProductItem[]) => {this.products = products},
      () => alert('Ocorrer um error ao buscar os produtos')
    );
  }

}
