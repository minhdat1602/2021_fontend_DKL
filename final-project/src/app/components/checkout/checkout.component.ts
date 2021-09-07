import { Component, OnInit } from '@angular/core';
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
    this.loadCart()
    this.getSubTotalPrice()
    this.getTax()
    this.getTotal()
    this.CartDetails()
    this.userDetail()
  }

  loadCart() {
    if (localStorage.getItem('localCart')) {
      this.localCart = JSON.parse(localStorage.getItem('localCart') || '{}')
    }
  }


  getSubTotalPrice() {
    if (localStorage.getItem('localCart')) {
      this.localCart = JSON.parse(localStorage.getItem('localCart') || '{}')
      this.subTotalPrice = this.localCart.reduce((acc: any, val: any) => {
        return acc + (val['product']['priceOfPiece'] * val['product']['quantity'])
      }, 0)
    }
  }

  getTax() {
    this.tax = this.subTotalPrice * 12 / 100;
  }

  getTotal() {
    this.total = this.subTotalPrice + this.tax
  }

  navigate() {
    if (this.authService.isLoggedIn()) {
      this.cartService.removeAll()
      this.router.navigate(['/success'])
      this.loadCart()
      this.cartNumberFunc()
    } else {

      this.router.navigate(['/login'])
    }
  }

  cartNumber: number = 0
  cartNumberFunc() {
    let count = 0
    let cartValue = JSON.parse(localStorage.getItem('localCart') || '{}')
    this.cartNumber = cartValue.length
    for (let i = 0; i < cartValue.length; i++) {
      count += cartValue[i]['product']['quantity']
    }
    this.cartNumber = count
    this.cartService.cartSubject.next(this.cartNumber)
  }

  getCartDetails: any = []
  CartDetails() {
    if (localStorage.getItem('localCart')) {
      this.getCartDetails = JSON.parse(localStorage.getItem('localCart') || '{}')
    }
  }

  getUserDetails: any
  userDetail() {
    if (localStorage.getItem('user')) {
      this.getUserDetails = JSON.parse(localStorage.getItem('user') || '{}')
    }
    console.log(this.getUserDetails)
  }

}
