import { Injectable } from '@angular/core';
import CartItem from 'src/app/shared/models/CartItem';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  products: CartItem[] = [
    {
      product: 
      {
        id: 1, 
        description: 'TV 43 Polegadas Samsung', 
        installments: 10, 
        price: 1999.99, 
        image: 'https://a-static.mlcdn.com.br/618x463/smart-tv-monitor-lg-24-led-wi-fi-webos-3-5-dtv-time-machine-ready-bivolt-24tl520s/zoo/98220/7d21b6ff5de0dd3a2d484476f0be9ac0.jpg',
        size: 'M',
        gender: 'Masculino',
        material: 'Tecido',
        color: 'Green',
        brand: 'Nike',
      }, 
      quantity: 1
    },
    {
      product: 
      {
        id: 2, 
        description: 'TV 43 Polegadas Samsung', 
        installments: 10, 
        price: 1999.99, 
        image: 'https://a-static.mlcdn.com.br/618x463/smart-tv-monitor-lg-24-led-wi-fi-webos-3-5-dtv-time-machine-ready-bivolt-24tl520s/zoo/98220/7d21b6ff5de0dd3a2d484476f0be9ac0.jpg',
        size: 'M',
        gender: 'Masculino',
        material: 'Tecido',
        color: 'Green',
        brand: 'Nike',
      }, 
      quantity: 1
    },
    {
      product: 
      {
        id: 3, 
        description: 'TV 43 Polegadas Samsung', 
        installments: 10, 
        price: 1999.99, 
        image: 'https://a-static.mlcdn.com.br/618x463/smart-tv-monitor-lg-24-led-wi-fi-webos-3-5-dtv-time-machine-ready-bivolt-24tl520s/zoo/98220/7d21b6ff5de0dd3a2d484476f0be9ac0.jpg',
        size: 'M',
        gender: 'Masculino',
        material: 'Tecido',
        color: 'Green',
        brand: 'Nike',
      }, 
      quantity: 1
    }
  ]
  
  addToCart(product){
    this.products.push({product: product, quantity: 1});
  }

  increaseQuantity(productId: number, quantity: number) {
    const index = this.products.findIndex(x => x.product.id === productId);
    this.products[index].quantity += quantity;
  }

  decreaseQuantity(productId: number, quantity: number) {
    const index = this.products.findIndex(x => x.product.id === productId);
    this.products[index].quantity -= quantity;
  }

  removeItem(id: number){
    const index = this.products.findIndex(x => x.product.id == id);
    this.products.splice(index, 1);
  }

  getCartItems(){
    return this.products;
  }

  clearCart(){
    this.products = [];
    return this.products;
  }

  constructor() { }
}
