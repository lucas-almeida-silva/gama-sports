import { Component, Input, OnInit } from '@angular/core';
import ProductItem from 'src/app/core/models/ProductItem';

@Component({
  selector: 'app-product-list-item',
  templateUrl: './product-list-item.component.html',
  styleUrls: ['./product-list-item.component.scss']
})
export class ProductListItemComponent implements OnInit {
  @Input() product: ProductItem;

  constructor() { }

  ngOnInit(): void {
  }

  getInstallmentsValue(product: ProductItem) {
    return product.price / product.installments;
  }

}
