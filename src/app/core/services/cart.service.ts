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
        description: 'Camisa Barcelona Rakuten', 
        installments: 10, 
        price: 1999.99, 
        image: 'https://images.tcdn.com.br/img/img_prod/498725/camisa_barcelona_2020_jogador_uniforme_titular_3823_1_20190703185610.jpg',
        size: 'M',
        gender: 'Masculino',
        material: 'Tecido',
        color: 'Granado',
        brand: 'Nike',
      }, 
      quantity: 1
    },
    {
      product: 
      {
        id: 2, 
        description: 'Camisa Barcelona Rakuten', 
        installments: 10, 
        price: 1999.99, 
        image: 'https://images.tcdn.com.br/img/img_prod/498725/camisa_barcelona_2020_jogador_uniforme_titular_3823_1_20190703185610.jpg',
        size: 'M',
        gender: 'Masculino',
        material: 'Tecido',
        color: 'Granado',
        brand: 'Nike',
      }, 
      quantity: 1
    },
    {
      product: 
      {
        id: 3, 
        description: 'Camisa Barcelona Rakuten', 
        installments: 10, 
        price: 1999.99, 
        image: 'https://images.tcdn.com.br/img/img_prod/498725/camisa_barcelona_2020_jogador_uniforme_titular_3823_1_20190703185610.jpg',
        size: 'M',
        gender: 'Masculino',
        material: 'Tecido',
        color: 'Granado',
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
