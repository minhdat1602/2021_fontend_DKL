import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Product } from 'src/app/model/product';
import { PRODUCTS } from 'src/data/data';
import AOS from 'aos';
import { ProductService } from 'src/app/services/product-service/product.service';
import { Router, Navigation, NavigationStart } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private productService: ProductService) {

  }
  faSearch = faSearch;

  typewriter_text: string = "Hạnh phúc là có người đồng hành gửi trao tin cậy";
  typewriter_display: string = "";
  typingCallback(that: this) {
    let total_length = that.typewriter_text.length;
    let current_length = that.typewriter_display.length;
    if (current_length < total_length) {
      that.typewriter_display += that.typewriter_text[current_length];
      setTimeout(that.typingCallback, 100, that);
    } else {
      this.typewriter_display = "";
    }
  }
  intro_title = "An Tâm chọn Sống An Nhiên";
  intro_text1 = "";
  intro_text2 = "";
  intro_text3 = "";

  ngOnInit(): void {
    try {
      AOS.init();
    } catch (e) {
      console.log(e)
    }
    this.typingCallback(this);
    this.getProducts();

  }

  products: Product[] = [];
  bestSellerProducts: Product[] = []
  getProducts(): void {
    this.productService.fetchProducts().subscribe(
      (products) => {
        this.products = products
        this.bestSellerProducts = this.products.filter(
          (item) => {
            return item.id % 2 === 0
          }
        )
      }
    );
  }

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    navSpeed: 600,
    navText: ['&#8249', '&#8250;'],
    lazyLoad: true,
    responsive: {
      // 0: {
      //   items: 1
      // },
      // 500: {
      //   items: 2
      // },
      // 1000: {
      //   items: 3
      // },
    },
    // nav: true
  }

}
