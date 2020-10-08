import { Component, Input, OnInit } from '@angular/core';
import { CartService } from 'src/app/core/services/cart.service';
import CartItem from 'src/app/shared/models/CartItem';
import Product from 'src/app/shared/models/Product';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss']
})
export class CartItemComponent implements OnInit {
  @Input() cartItem: CartItem;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
  }

  removeCartItem() {
    this.cartService.removeItem(this.cartItem.product.id)
  }

}
