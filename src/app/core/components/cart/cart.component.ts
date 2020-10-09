import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import CartItem from 'src/app/shared/models/CartItem';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cartItems = this.cartService.products;

  constructor(
    private cartService: CartService,
    private toastrService: ToastrService,
    private router: Router) { }

  ngOnInit(): void {
  }

  getTotal(): number {
    return this.cartItems.reduce((accumulator, cartItem) => accumulator + (cartItem.product.price * cartItem.quantity), 0);
  }

  checkout(): void {
    this.toastrService.success("Compra finalizada com sucesso!");
    this.cartService.clearCart();
    this.router.navigateByUrl("/");
  }
}
