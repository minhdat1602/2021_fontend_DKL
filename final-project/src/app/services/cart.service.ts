import { Injectable } from '@angular/core';

import { Subject } from 'rxjs'
import { Apartment } from '../model/apartment.model';
import { Cart } from '../model/cart.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }


  // Add to cart
  itemsCart: Cart[] = []
  termObj = {}
  addToCart(apartment: Apartment) {
    let item: Cart = new Cart(apartment, 1)
    let cartData = localStorage.getItem('localCart')
    if (cartData == null) {
      let storeDataGet: Cart[] = []
      storeDataGet.push(item)
      localStorage.setItem('localCart', JSON.stringify(storeDataGet))
      return true
    } else if((this.itemsCart = JSON.parse(localStorage.getItem('localCart') || '{}')).length==0){
      this.itemsCart.push(item)
      localStorage.setItem('localCart', JSON.stringify(this.itemsCart))
    }

    // else {
      // let id = apartment.id
      // let index: number = -1
      // this.itemsCart = JSON.parse(localStorage.getItem('localCart') || '{}')
      // for (let i = 0; i < this.itemsCart.length; i++) {
      //   if (id === this.itemsCart[i].apartment.id) {
      //     this.itemsCart[i].quantity = this.itemsCart[i].quantity + 1
      //     index = i
      //     break
      //   }
      // }
      // if (index == -1) {
      //   this.itemsCart.push(item)
      //   localStorage.setItem('localCart', JSON.stringify(this.itemsCart))
      // } else {
      //   localStorage.setItem('localCart', JSON.stringify(this.itemsCart))
      // }
      return false;
    // }
    
    // this.cartNumberFunc()
  }


  // End add to cart

  // delete all items
  removeAll() {
    localStorage.removeItem('localCart');
  }



  // end delete all items


  cartSubject = new Subject<any>()

}
