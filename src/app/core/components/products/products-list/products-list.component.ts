import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ProductsService } from 'src/app/core/services/products.service';
import Product from 'src/app/shared/models/Product';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {
  products: Product[] = [];

  constructor(
    private toastrService: ToastrService,
    private productsService: ProductsService,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(params => {
      if(params.hasOwnProperty('search')) {
        this.getProducts(params.search);
      } else {
        this.getProducts();
      }
    });
  }

  getProducts(search?: string) {
    this.productsService.getProducts(search).subscribe(
      (products: Product[]) => { this.products = products },
      () => this.toastrService.error("Ocorreu um erro ao buscar os produtos")
    );
  }
}
