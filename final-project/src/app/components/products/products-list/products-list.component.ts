import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service'; 
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

  constructor(
    private productService: ProductService,
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

  tabSize(event: any){
    this.page = event;
    this.showData();
  }  
  
}
