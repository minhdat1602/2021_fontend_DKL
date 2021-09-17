import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { FormatNumberService } from '../../../services/format-number.service';
import { Product } from '../../../model/product';
import { faBed, faLocationArrow, faChartArea, faBath, faCompass } from '@fortawesome/free-solid-svg-icons';
import { ActivatedRoute } from '@angular/router';
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
  priceValue: number = 100000
  filterLocation: string = ''
  location: string = ''

  public products: Product[] = []

  // icons
  faBed = faBed
  faLocationArrow = faLocationArrow
  faChartArea = faChartArea
  faBath = faBath
  faCompass = faCompass

  constructor(
    private productService: ProductService,
    public formatNumberService: FormatNumberService,
    private actRoute: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    this.actRoute.queryParams.subscribe(param => {
      this.location = param['location']
      if (this.location === 'ocean') {
        this.filterLocation = 'Tây'
      } else if (this.location === 'west-point') {
        this.filterLocation = 'Đông'
      }
      this.searchText = param['search']
    })

    this.productService.getAllProducts().subscribe(
      response => {
        this.products = response.filter(item => {
          return item.direct.includes(this.filterLocation)
        });

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
    this.priceValue = 600000000 + this.filterPrice * 5000000
    console.log(this.filterPrice)
  }

  filterLocationFunc(e: number) {
    if (e === 1) {
      this.filterLocation = ''
    } else if (e === 2) {
      this.filterLocation = 'Tây'
    } else if (e === 3) {
      this.filterLocation = 'Đông'
    }
    console.log(this.filterLocation)
  }

}
