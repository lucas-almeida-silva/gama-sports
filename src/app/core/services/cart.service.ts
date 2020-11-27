import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import Cart from 'src/app/shared/models/Cart';
import CartItem from 'src/app/shared/models/CartItem';
import Product from 'src/app/shared/models/Product';
import { environment } from 'src/environments/environment';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private baseURL = `${environment.apiBaseUrl}/cart`; 
  private cartItems: CartItem[] = [];

  constructor(
    private httpClient: HttpClient,
    private authService: AuthService
  ) {

    const cartItems = this.getCartFromLocalStorage();

    if(cartItems) {
      this.cartItems = cartItems;
    }
  }

  addToCart(product: Product, size?: string){
    const cartItem = this.cartItems.find(
      item => item.product.product_id === product.product_id && item.size === size
    );

    if(cartItem) {
      this.increaseQuantity(cartItem.product.product_id, 1, size);
    } 
    else {
      this.cartItems.push({product: product, size: size, quantity: 1});
    }

    this.saveCartOnLocalStorage();
  }

  increaseQuantity(productId: number, quantity: number, size?: string) {
    const index = this.cartItems.findIndex(
      item => item.product.product_id === productId && item.size === size
    );

    this.cartItems[index].quantity += quantity;
  }

  decreaseQuantity(productId: number, quantity: number, size?: string) {
    const index = this.cartItems.findIndex(
      item => item.product.product_id === productId && item.size === size
    );

    this.cartItems[index].quantity -= quantity;
  }

  removeItem(productId: number, size?: string){
    const index = this.cartItems.findIndex(
      item => item.product.product_id === productId && item.size === size
    );

    this.cartItems.splice(index, 1);
    this.saveCartOnLocalStorage();
  }

  getCartItems(){
    return this.cartItems;
  }

  getTotalItems() {
    const total =  this.cartItems.reduce((total, cartItem) => {
      return total += cartItem.quantity
    }, 0);

    return total;
  }

  clearCart() {
    this.cartItems = [];
    this.removeCartFromLocalStorage();
  }

  private saveCartOnLocalStorage() {
    localStorage.setItem('cart', JSON.stringify(this.cartItems));
  }

  private removeCartFromLocalStorage() {
    localStorage.removeItem('cart');
  }

  private getCartFromLocalStorage(): CartItem[] | null {
    const cartItems = localStorage.getItem('cart');

    if(!cartItems) 
      return null;

    return JSON.parse(cartItems) as CartItem[];
  }

  saveCart(cart: Cart) {    
    const { token } = this.authService.getUser();

    return this.httpClient.post(this.baseURL, cart, {
      headers: new HttpHeaders().set('x-access-token', token)
    });
  }
}
