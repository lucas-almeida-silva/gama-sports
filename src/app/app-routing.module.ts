import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'products', pathMatch: 'full' },
  { path: 'users', loadChildren: () => import('./core/components/users/users.module').then(m => m.UsersModule) },
  { path: 'products', loadChildren: () => import('./core/components/products/products.module').then(m => m.ProductsModule) },
  { path: 'cart', loadChildren: () => import('./core/components/cart/cart.module').then(m => m.CartModule) }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
