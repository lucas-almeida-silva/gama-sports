import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import CartItem from 'src/app/shared/models/CartItem';
import Product from 'src/app/shared/models/Product';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  products: CartItem[] =  [];
  productsSubject = new BehaviorSubject<CartItem[]>([]);
  
  addToCart(product: Product, size?: string){
    const cartItem = this.products.find(p => p.product.id === product.id && p.size === size);

    if(cartItem) {
      this.increaseQuantity(cartItem.product.id, 1, size);
    } 
    else {
      this.products.push({product: product, size: size, quantity: 1});
      this.productsSubject.next(this.products);
    }
  }

  increaseQuantity(productId: number, quantity: number, size?: string) {
    const index = this.products.findIndex(product => product.product.id === productId && product.size === size);
    this.products[index].quantity += quantity;
    this.productsSubject.next(this.products);
  }

  decreaseQuantity(productId: number, quantity: number, size?: string) {
    const index = this.products.findIndex(product => product.product.id === productId && product.size === size);
    this.products[index].quantity -= quantity;
    this.productsSubject.next(this.products);
  }

  removeItem(productId: number, size?: string){
    const index = this.products.findIndex(product => product.product.id === productId && product.size === size);
    this.products.splice(index, 1);
    this.productsSubject.next(this.products);
  }

  getCartItems(){
    return this.products;
  }

  clearCart() {
    this.products = [];
    this.productsSubject.next(this.products);
  }

}
