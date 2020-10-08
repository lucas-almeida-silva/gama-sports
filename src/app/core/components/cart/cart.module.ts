import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartRoutingModule } from './cart-routing.module';
import { CartComponent } from './cart.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MaterialModule } from 'src/app/material.module';
import { CartItemComponent } from './cart-item/cart-item.component';
import { CartItemsHeaderComponent } from './cart-items-header/cart-items-header.component';


@NgModule({
  declarations: [CartComponent, CartItemComponent, CartItemsHeaderComponent],
  imports: [
    CommonModule,
    CartRoutingModule,
    SharedModule,
    MaterialModule
  ]
})
export class CartModule { }
