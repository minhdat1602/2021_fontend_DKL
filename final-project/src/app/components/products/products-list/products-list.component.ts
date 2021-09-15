import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { FormatNumberService } from '../../../services/format-number.service';
import { Product } from '../../../model/product';
import { faBed, faLocationArrow, faChartArea, faBath, faCompass } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-listproducts',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {

  // Pagination
  page = 1;
  count = 0;
  tableSize = 5;
  tableSizesArr = [4, 8, 12];

  // Search and filter
  searchText: string = '';
  filterPrice: number = 1;
  priceValue: number = 500000000

  public products: Product[] = []

  // icons
  faBed = faBed
  faLocationArrow = faLocationArrow
  faChartArea = faChartArea
  faBath = faBath
  faCompass = faCompass

  constructor(
    private productService: ProductService,
    public formatNumberService: FormatNumberService
  ) {
  }

  ngOnInit(): void {
    this.productService.getAllProducts().subscribe(
      response => {
        this.products = response;

      },
      (error) => {
        console.log(error)
      }
    )
  }

  tabSize(event: any) {
    this.page = event;
  }

  filterPriceFunc() {
    this.priceValue = 500000000 + this.filterPrice * 20000000
    console.log(this.filterPrice)
  }

}
