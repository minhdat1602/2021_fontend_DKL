import { Component, HostListener, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Product } from 'src/app/model/product';
import { PRODUCTS } from 'src/data/data';
import AOS from 'aos';
import { ProductService } from 'src/app/services/product-service/product.service';
import { Router, Navigation, NavigationStart, ActivatedRoute } from '@angular/router';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  control = new FormControl();
  streets: string[] = [];
  filteredStreets?: Observable<string[]>;

  constructor(private productService: ProductService) {
  }

  background?: String = "assets/img/banner.jpg";

  faSearch = faSearch;
  searchText = ''

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

  // Lấy kích thước của trang
  public innerWidth: any;
  public productWidth: any;
  @HostListener('window:resize', ['$event'])
  onResize() {
    this.innerWidth = window.innerWidth;
    console.log("inner" + this.innerWidth);
  }
  ngOnInit(): void {
    this.innerWidth = window.innerWidth;
    try {
      AOS.init();
    } catch (e) {
      console.log(e)
    }
    this.typingCallback(this);
    this.getProducts();
    this.filteredStreets = this.control.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    );

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
      0: {
        items: 1
      },
      480: {
        items: 1
      },
      768: {
        items: 2
      },
      1024: {
        items: 3
      },
    },
    // nav: true
  }

  // Auto complete search
  private _filter(value: string): string[] {
    const filterValue = this._normalizeValue(value);
    console.log(filterValue);
    let t: string[] = [];
    this.productService.fetchByKey(filterValue).subscribe((streets) => {
      streets.forEach((product) => {
        let n = product.name;
        // if (filterValue.trim().length > 0) {
        //   n = n.replace(filterValue, "<span class='aa'>" + filterValue + "</span>")
        // }
        t.push(n);
      });
      this.streets = t;
    });
    if (filterValue.trim().length == 0) {
      this.streets = [];
    }
    return this.streets.filter(street => this._normalizeValue(street).includes(filterValue));

  }

  private _normalizeValue(value: string): string {
    return value.toLowerCase().replace(/\s/g, '');
  }

}
