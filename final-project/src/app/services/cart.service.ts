import { Injectable } from '@angular/core';
import { Subject } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }

  // Add to cart
  itemsCart: any = []
  termObj = {}
  addToCart(prodId: number, prod: any) {
    let cart: any = {
      id: prodId,
      product: prod
    }

    let cartDataNull = localStorage.getItem('localCart')

    if (cartDataNull == null) {
      let storeDataGet: any = []
      storeDataGet.push(cart)
      localStorage.setItem('localCart', JSON.stringify(storeDataGet))
    } else {
      let id = prodId
      let index: number = -1
      this.itemsCart = JSON.parse(localStorage.getItem('localCart') || '{}')
      for (let i = 0; i < this.itemsCart.length; i++) {
        if (id === parseInt(this.itemsCart[i].id)) {
          this.itemsCart[i]['product']['quantity'] += prod['quantity']
          index = i
          break
        }
      }
      if(index == -1){
        this.itemsCart.push(cart)
        localStorage.setItem('localCart', JSON.stringify(this.itemsCart))
      }else {
        localStorage.setItem('localCart', JSON.stringify(this.itemsCart))
      }
    }
    // this.cartNumberFunc()
  }
  

  // End add to cart
  
  // delete all items
  removeAll(){
    localStorage.removeItem('localCart');
  }


  
  // end delete all items


  cartSubject = new Subject<any>()
}
