import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../../services/cart.service';
import { FormatNumberService } from '../../services/format-number.service';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

  localCart: any = [];
  subTotalPrice: number = 0
  tax: number = 0;
  total: number = 0;

  constructor(
    private cartService: CartService,
    public formatNumberService: FormatNumberService,
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.userDetail()
    this.getApartment()

  }
  couponValue = 0
  apartment: any
  getApartment() {
    if (localStorage.getItem('localCart')) {
      let cartItems = JSON.parse(localStorage.getItem('localCart') || '{}')
      if (cartItems.length > 0) {
        this.apartment = cartItems[0]['apartment']
        this.couponValue = (this.apartment.price + this.apartment.price * 0.1 + this.apartment.price * 0.02) * 0.1
        this.setTotalPrice()
      } 
    }
   
  }

  totalPrice: any;
  setTotalPrice() {
    this.totalPrice = this.apartment.price + this.apartment.price * 0.1 + this.apartment.price * 0.02 - this.couponValue
  }



  cartNumber: number = 0
  cartNumberFunc() {
    this.cartService.cartSubject.next(0)
  }


  user: any
  userDetail() {
    if (localStorage.getItem('user')) {
      this.user = JSON.parse(localStorage.getItem('user') || '{}')
    }
    console.log(this.user)
  }


  notification:boolean=false
  payment() {
    if (this.authService.isLoggedIn()) {
      this.cartService.removeAll()

      setTimeout(() => {
        this.router.navigate(['/cart']);
      }, 3000)

      this.cartNumberFunc()

      this.notification = true
    } else {
      this.router.navigate(['/login'])
    }
  }

}
