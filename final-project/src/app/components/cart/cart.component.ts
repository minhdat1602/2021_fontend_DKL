import { Component, OnInit } from '@angular/core';
import { FormatNumberService } from '../../service/format-number.service';
import { CartService } from '../../service/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  isShowWarningPopup: boolean = false;

  constructor(
    public formatNumberService: FormatNumberService,
    private cartService: CartService
  ) { }

  ngOnInit(): void {
    this.CartDetails()
    this.loadCart()
  }

  getCartDetails: any = []
  CartDetails() {
    if (localStorage.getItem('localCart')) {
      this.getCartDetails = JSON.parse(localStorage.getItem('localCart') || '{}')
    }
  }

  decre(id: any, quantity: any) {
    for (let i = 0; i < this.getCartDetails.length; i++) {
      if (this.getCartDetails[i]['id'] === parseInt(id) && this.getCartDetails[i]['product']['quantity'] > 1) {
        this.getCartDetails[i]['product']['quantity'] = parseInt(quantity) - 1
      }
    }
    localStorage.setItem('localCart', JSON.stringify(this.getCartDetails))
    this.loadCart()
    this.cartNumberFunc()
  }

  incre(id: any, quantity: any) {
    for (let i = 0; i < this.getCartDetails.length; i++) {
      if (this.getCartDetails[i]['id'] === parseInt(id)) {
        this.getCartDetails[i]['product']['quantity'] = parseInt(quantity) + 1
      }
    }
    localStorage.setItem('localCart', JSON.stringify(this.getCartDetails))
    this.loadCart()
    this.cartNumberFunc()
  }

  total: number = 0
  loadCart() {
    if (localStorage.getItem('localCart')) {
      this.getCartDetails = JSON.parse(localStorage.getItem('localCart') || '{}')
      this.total = this.getCartDetails.reduce((acc: any, val: any) => {
       return acc +  (val['product']['priceOfPiece'] * val['product']['quantity'])
      }, 0)
    }
  }

  deleteItem(item: any){
    if(localStorage.getItem('localCart')){
      this.getCartDetails = JSON.parse(localStorage.getItem('localCart') || '{}')
      for(let i = 0; i < this.getCartDetails.length; i++){
        if(item['id'] === this.getCartDetails[i]['id']){
          this.getCartDetails.splice(i, 1)
          localStorage.setItem('localCart', JSON.stringify(this.getCartDetails))
          this.loadCart()
          this.cartService.cartSubject.next(this.cartNumber)
        }
      }
    }
  }

  // Increase number of items in real time
  cartNumber: number = 0
  cartNumberFunc() {
    let count = 0
    let cartValue = JSON.parse(localStorage.getItem('localCart') || '{}')
    this.cartNumber = cartValue.length
    for(let i = 0; i < cartValue.length; i++){
      count += cartValue[i]['product']['quantity']
    }
    this.cartNumber = count
    this.cartService.cartSubject.next(this.cartNumber)
  }

  showWarningPopup() {
    this.isShowWarningPopup = true
  }

  hiddenWarningPopup(){
    this.isShowWarningPopup = false
  }

}
