import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormatNumberService } from 'src/app/services/format-number.service';
import { CartService } from 'src/app/services/cart.service';
import { faBed, faBath, faTimes} from '@fortawesome/free-solid-svg-icons';
import { CouponService } from 'src/app/services/coupon.service';
import { ApartmentService } from 'src/app/services/apartment.service';
import { Apartment } from 'src/app/model/apartment.model';
import { KeyValue } from '@angular/common';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.pc.scss', './cart.mobile.scss','./cart.ipad.scss']
})
export class CartComponent implements OnInit {
  headerName="Giỏ hàng"
  deleteSuccessNotification="Đã xóa sản phẩm"

  faBed=faBed
  faBath=faBath
  faTimes=faTimes
  isShowWarningPopup: boolean = false
  isEmpty:boolean = true
  deleted:boolean = false;
  constructor(
    public formatNumberService: FormatNumberService,
    private cartService: CartService,
    private couponService: CouponService,
    private apartmentService: ApartmentService
  ) { }

  ngOnInit(): void {
    // this.CartDetails()
    // this.loadCart()
    this.getApartment();

  }

  apartment: any
  getApartment() {
    if (localStorage.getItem('localCart')) {
      let cartItems = JSON.parse(localStorage.getItem('localCart') || '{}')
      if(cartItems.length > 0){
        this.apartment = cartItems[0]['apartment']
        this.setTotalPrice()
        this.isEmpty= false
      }else{
        this.isEmpty= true
      }
     
    }
  }

  // decre(id: any, quantity: any) {
  //   for (let i = 0; i < this.getCartDetails.length; i++) {
  //     if (this.getCartDetails[i]['id'] === parseInt(id) && this.getCartDetails[i]['product']['quantity'] > 1) {
  //       this.getCartDetails[i]['product']['quantity'] = parseInt(quantity) - 1
  //     }
  //   }
  //   localStorage.setItem('localCart', JSON.stringify(this.getCartDetails))
  //   this.loadCart()
  //   this.cartNumberFunc()
  // }

  // incre(id: any, quantity: any) {
  //   for (let i = 0; i < this.getCartDetails.length; i++) {
  //     if (this.getCartDetails[i]['id'] === parseInt(id)) {
  //       this.getCartDetails[i]['product']['quantity'] = parseInt(quantity) + 1
  //     }
  //   }
  //   localStorage.setItem('localCart', JSON.stringify(this.getCartDetails))
  //   // this.loadCart()
  //   this.cartNumberFunc()
  // }

  // total: number = 0
  // loadCart() {
  //   if (localStorage.getItem('localCart')) {
  //     this.getCartDetails = JSON.parse(localStorage.getItem('localCart') || '{}')
  //     this.total = this.getCartDetails.reduce((acc: any, val: any) => {
  //       return acc + (val['product']['priceOfPiece'] * val['product']['quantity'])
  //     }, 0)
  //   }
  // }

  deleteItem(item: any) {
    let emptyArr: any[] = []
    localStorage.setItem('localCart',JSON.stringify(emptyArr))
    this.getApartment()
    this.cartNumberFunc()
    this.deleted =true
    // if (localStorage.getItem('localCart')) {
    //   this.getCartDetails = JSON.parse(localStorage.getItem('localCart') || '{}')
    //   for (let i = 0; i < this.getCartDetails.length; i++) {
    //     if (item['id'] === this.getCartDetails[i]['id']) {
    //       this.getCartDetails.splice(i, 1)
    //       localStorage.setItem('localCart', JSON.stringify(this.getCartDetails))
    //       this.loadCart()
    //       this.cartService.cartSubject.next(this.cartNumber)
    //       this.isShowWarningPopup = false
    //     }
    //   }
    // }
  }

  // Increase number of items in real time
  // cartNumber: number = 0
  cartNumberFunc() {
    // let count = 0
    // let cartValue = JSON.parse(localStorage.getItem('localCart') || '{}')
    // this.cartNumber = cartValue.length
    // for (let i = 0; i < cartValue.length; i++) {
    //   count += cartValue[i]['product']['quantity']
    // }
    // this.cartNumber = count
    this.cartService.cartSubject.next(0)
  }

  showWarningPopup() {
    this.isShowWarningPopup = true
  }

  hiddenWarningPopup() {
    this.isShowWarningPopup = false
  }



  // //test
  // apartment: any
  // getApartment(){
  //   this.apartmentService.fetchApartments('1').subscribe((aparts)=>{
  //     this.apartment = aparts
  //     this.setTotalPrice()
  //   })
  // }

  totalPrice: any;
  setTotalPrice(){
    this.totalPrice = this.apartment.price + this.apartment.price * 0.1 + this.apartment.price*0.02 - this.couponValue
  }
  @ViewChild('couponCode') couponCode: ElementRef
  couponValue = 0
  couponPercent=0
  errorShow: any
  successShow:any
  //check coupon
  applyCoupon(){
    this.couponService.getAllCoupons().subscribe((coupons)=>{
      let found = false;
      let coupon = this.couponCode.nativeElement.value;
      coupons.forEach(cou => {
        if(coupon === cou.code){
          found = true;
          this.couponValue = this.apartment.price * cou.value
          this.couponPercent = cou.value * 100     
        }    
      });
      if(found){
        this.errorShow = false
        this.successShow = true
      }else{
        this.successShow = false
        this.errorShow = true
        this.couponValue = 0
      }
      this.setTotalPrice()
    })
  }

}
