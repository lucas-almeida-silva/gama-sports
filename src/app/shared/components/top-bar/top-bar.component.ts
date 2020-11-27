import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
import { CartService } from 'src/app/core/services/cart.service';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent implements OnInit {
  search: string;

  constructor(
    private cartService: CartService,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  isUserLogged(): boolean {
    return this.authService.isLoggedUser();
  }

  getUserName(): string {
    return this.authService.getUser().name;
  }
  
  getTotal(): number {
    return this.cartService.getTotalItems();
  }

  logout() {
    this.authService.logout();
  }

  searchProducts() {
    this.router.navigate(['/products'], { 
      queryParams: { search: this.search }
    });
  }

  onPressKey(event: KeyboardEvent) {
    if(event.key === "Enter") {
      this.searchProducts();
    }
  }
}