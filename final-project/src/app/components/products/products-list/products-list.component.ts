import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { FormatNumberService } from '../../../services/format-number.service';
@Component({
  selector: 'app-listproducts',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {

  page = 1;
  count = 0;
  tableSize = 9;
  tableSizesArr = [4, 8, 12];

  searchText: string = '';

  filterPrice: number = 1;

  priceValue: number = 10000000

  constructor(
    private productService: ProductService,
    public formatNumberService: FormatNumberService
  ) { }

  products: any[] = [];
  ngOnInit(): void {
    this.showData()
  }

  showData() {
    this.productService.getAllProduct().subscribe(
      item => {
        this.products = item
      }
    )
  }

  tabSize(event: any) {
    this.page = event;
    this.showData();
  }

  filterPriceFunc() {
    this.priceValue = 5000000 + this.filterPrice * 100000
    console.log(this.filterPrice)
  }

}
