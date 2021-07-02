import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth/auth.service';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(
    public authService: AuthService,
    public cartService: CartService
  ) { 
    this.cartService.cartSubject.subscribe((data) => {
      this.cartItem = data
    })
  }

  ngOnInit(): void {
    
  }

  cartItem = 0
  countItemInCart() {
    let count = 0
    if(localStorage.getItem('localCart') != null){
      let cartCount = JSON.parse(localStorage.getItem('localCart') || '{}')
      for(let i = 0; i < cartCount.length; i++){
        count += cartCount[i]['product']['quantity']
      }
    }
    this.cartItem = count
  }

}
