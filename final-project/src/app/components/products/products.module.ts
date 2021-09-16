import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsListComponent } from './products-list/products-list.component';
import { ProductSingleComponent } from './product-single/product-single.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FilterPipe } from 'src/app/pipes/filter.pipe';
import { PriceFilterPipe } from '../../pipes/price-filter.pipe';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LocationFilterPipe } from '../../pipes/location-filter.pipe';
// import { ProductDetailsComponent } from './product-details/product-details.component';
import { NotificationComponent } from '../common/notification/notification.component';


@NgModule({
  declarations: [
    ProductsListComponent,
    ProductSingleComponent,
    FilterPipe,
    PriceFilterPipe,
    LocationFilterPipe,
    NotificationComponent
    // ProductDetailsComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    FormsModule,
    NgxPaginationModule,
    Ng2SearchPipeModule,
    FontAwesomeModule
  ]
})
export class ProductsModule { }
