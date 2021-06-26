import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsListComponent } from './products-list/products-list.component';
import { ProductSingleComponent } from './product-single/product-single.component';


@NgModule({
  declarations: [
    ProductsListComponent,
    ProductSingleComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    NgxPaginationModule
  ]
})
export class ProductsModule { }
