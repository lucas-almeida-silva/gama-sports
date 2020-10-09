import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductsListComponent } from './products-list/products-list.component';

import { ProductsComponent } from './products.component';

const routes: Routes = [
  { 
    path: '', component: ProductsComponent,
    children: [
      { path: '', component: ProductsListComponent },
      { path: 'details/:id', component: ProductDetailsComponent }
    ]
  }
  // { path: '**', redirectTo: '/'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
