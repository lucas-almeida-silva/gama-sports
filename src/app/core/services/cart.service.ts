import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import CartItem from 'src/app/shared/models/CartItem';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  products: CartItem[] =  [];
  productsSubject = new BehaviorSubject<CartItem[]>([]);
  
  addToCart(product){
    const cartItem = this.products.find(p => p.product.id === product.id);

    if(cartItem) {
      this.increaseQuantity(cartItem.product.id, 1);
    } 
    else {
      this.products.push({product: product, quantity: 1});
      this.productsSubject.next(this.products);
    }
  }

  increaseQuantity(productId: number, quantity: number) {
    const index = this.products.findIndex(x => x.product.id === productId);
    this.products[index].quantity += quantity;
    this.productsSubject.next(this.products);
  }

  decreaseQuantity(productId: number, quantity: number) {
    const index = this.products.findIndex(x => x.product.id === productId);
    this.products[index].quantity -= quantity;
    this.productsSubject.next(this.products);
  }

  removeItem(id: number){
    const index = this.products.findIndex(x => x.product.id == id);
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
