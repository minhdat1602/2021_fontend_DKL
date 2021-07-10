import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsListComponent } from './products-list/products-list.component';
import { ProductSingleComponent } from './product-single/product-single.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FilterPipe } from 'src/app/pipes/filter.pipe';
import { PriceFilterPipe } from '../../pipes/price-filter.pipe';


@NgModule({
  declarations: [
    ProductsListComponent,
    ProductSingleComponent,
    FilterPipe,
    PriceFilterPipe
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    NgxPaginationModule,
    Ng2SearchPipeModule
  ]
})
export class ProductsModule { }
