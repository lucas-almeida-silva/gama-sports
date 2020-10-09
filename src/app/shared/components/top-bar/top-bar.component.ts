import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/core/services/cart.service';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent implements OnInit {
  totalCartItems: number = this.cartService.products.length;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
  }

}
