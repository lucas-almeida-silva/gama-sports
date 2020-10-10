import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { SharedModule } from '../../../shared/shared.module';
import { MaterialModule } from '../../../material.module';
import { ProductsListComponent } from './products-list/products-list.component';
import { ProductListItemComponent } from './products-list/product-list-item/product-list-item.component';
import { NgImageSliderModule } from 'ng-image-slider';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ProductsComponent, ProductDetailsComponent, ProductsListComponent, ProductListItemComponent],
  imports: [
    CommonModule,
    FormsModule,
    ProductsRoutingModule,
    SharedModule,
    MaterialModule,
    NgImageSliderModule
  ]
})
export class ProductsModule { }
