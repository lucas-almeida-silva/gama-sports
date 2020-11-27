import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import Cart from 'src/app/shared/models/Cart';
import CartItem from 'src/app/shared/models/CartItem';
import { AuthService } from '../../services/auth.service';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cartItems: CartItem[];

  constructor(
    private cartService: CartService,
    private toastrService: ToastrService,
    private authService: AuthService,
    private router: Router) { }

  ngOnInit(): void {
    this.cartItems = this.cartService.getCartItems();
  }

  getTotal(): number {
    return this.cartItems.reduce((sum, cartItem) => {
      return sum += (cartItem.product.price * cartItem.quantity);
    }, 0); 
  }

  checkout(): void {
    if(!this.authService.isLoggedUser()) {
      this.router.navigate(["/users/login"], {
        queryParams: { returnURL: '/cart'}
      });

      return;
    }

    const cart: Cart = {
      clientId: this.authService.getUser().id,
      total: this.getTotal(),
      products: this.cartItems.map(cartItem => {
        return {
          id: cartItem.product.product_id,
          quantity: cartItem.quantity,
          size: cartItem.size
        }
      })
    }

    this.cartService.saveCart(cart).subscribe(
      () => {
        this.toastrService.success("Compra finalizada com sucesso!");
        this.cartService.clearCart();
        this.router.navigateByUrl("/");
      },
      (error) => {
        if(error.error.message) {
          this.toastrService.error(error.error.message);
        } else {
          this.toastrService.error("Ocorreu um erro ao salvar o carrinho, tente novamente.");
        }
      }
    );
  }
}
