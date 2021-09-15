import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth/auth.service';
import { CartService } from '../../services/cart.service';
import { faShoppingCart, faUser, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { KeyValue } from '@angular/common';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  faShoppingCart = faShoppingCart;
  faUser = faUser;
  faBars = faBars;
  faTimes = faTimes;

  showDrawer: boolean = false;
  clickDrawerBtn(): void {
    this.showDrawer = !this.showDrawer;
  }


  menuSelected: String = "";
  menus: KeyValue<String, any>[] = [
    { key: "Trang chủ", value: "" },
    { key: "Căn hộ", value: "products" },
    { key: "Dự án", value: "ocean-park-introduce" },
    { key: "Dự án phía tây", value: "west-point-introduce" },
    { key: "Liên hệ", value: "contact" },
  ];

  constructor(
    public authService: AuthService,
    public cartService: CartService
  ) {
    this.cartService.cartSubject.subscribe((data) => {
      this.cartItem = data
    })
  }

  ngOnInit(): void {
    if (this.menuSelected === "")
      this.menuSelected = this.menus[0].key;
    this.countItemInCart()
  }

  changeMenu(menu: String): void {
    this.menuSelected = menu;
    console.log(menu);
  }

  cartItem = 0
  countItemInCart() {
    let count = 0
    if (localStorage.getItem('localCart') != null) {
      let cartCount = JSON.parse(localStorage.getItem('localCart') || '{}')
      for (let i = 0; i < cartCount.length; i++) {
        count += cartCount[i].quantity
      }
    }
    this.cartItem = count
    console.log(this.cartItem)
  }

}
