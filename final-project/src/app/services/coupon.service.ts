import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Coupon } from '../model/coupon.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CouponService {

    public coupons?: Observable<Coupon[]>

    private couponURL: string = "http://localhost:5000/coupons"
  
    constructor(private httpClient: HttpClient) { }
    ngOnInit() {
  
    }
  
    getAllCoupons(): Observable<Coupon[]> {
      this.coupons = this.httpClient.get<Coupon[]>(this.couponURL)
      return this.coupons
    }

}
