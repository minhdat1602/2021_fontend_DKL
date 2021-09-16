import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product';

@Component({
  selector: 'app-product-slide-item',
  templateUrl: './product-slide-item.component.html',
  styleUrls: ['./product-slide-item.component.scss']
})
export class ProductSlideItemComponent implements OnInit {

  constructor() { }

  @Input() productWidth: any;
  @Input() primary?: string;
  @Input() secondary?: string;
  @Input() product?: Product = new Product(1, "S2.170606 - 1 PN Deluxe - Vinhomes Ocean Park", 47.00, 2, 1, "Tây Nam", 900000000, "https://stay.vinhomes.vn/on/demandware.static/-/Sites-vhm_leasing_en_master/vi_VN/dw5fe2e3e9/images/Vinhomes%20Ocean%20Park/Studio/Studio_4_medium.jpg")

  // product: Product = new Product(1, "S2.170606 - 1 PN Deluxe - Vinhomes Ocean Park", 47.00, 2, 1, "Tây Nam", 900000000, "https://stay.vinhomes.vn/on/demandware.static/-/Sites-vhm_leasing_en_master/vi_VN/dw5fe2e3e9/images/Vinhomes%20Ocean%20Park/Studio/Studio_4_medium.jpg");

  ngOnInit(): void {
    // console.log(this.product)
  }
}
