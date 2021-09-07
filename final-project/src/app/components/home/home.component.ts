import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Product } from 'src/app/model/product';
import { PRODUCTS } from 'src/data/data';
import AOS from 'aos';
import { ProductService } from 'src/app/services/product-service/product.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private productService: ProductService) { }
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
      console.log("a");
    } catch (e) {
      console.log("b");
    }
    this.typingCallback(this);
    this.getProducts();

  }

  products: Product[] = [];
  getProducts(): void {
    console.log("fetch DATA");
    this.productService.fetchProducts().subscribe((products) => this.products = products);
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
    },
    // nav: true
  }

}
