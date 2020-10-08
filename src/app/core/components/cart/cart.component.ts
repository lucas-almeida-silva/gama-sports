import { Component, OnInit } from '@angular/core';
import CartItem from 'src/app/shared/models/CartItem';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cartItems = this.cartService.products;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
  }

  getTotal(): number {
    return this.cartItems.reduce((accumulator, value) => accumulator + value.product.price, 0);
  }
}
