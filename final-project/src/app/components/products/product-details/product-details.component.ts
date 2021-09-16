import { Component, OnInit } from '@angular/core';
import { faBed, faLocationArrow, faChartArea, faBath, faCompass } from '@fortawesome/free-solid-svg-icons';
import { Apartment } from 'src/app/model/apartment.model';
import { ApartmentService } from 'src/app/services/apartment.service';
import { Image } from 'src/app/model/image.model';
import { FormatNumberService } from 'src/app/services/format-number.service';
import { ActivatedRoute } from '@angular/router';
import { Comment } from '../../../model/comment.model';
import { CommentService } from '../../../services/comment.service';
import { CartService } from '../../../services/cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  sucessMessage="ĐÃ THÊM VÀO GIỎ HÀNG"
  private param?: String
  // Icons for UI
  faBed = faBed
  faLocationArrow = faLocationArrow
  faChartArea = faChartArea
  faBath = faBath
  faCompass = faCompass

  // Comments
  public textComment?: String = ''
  public comment: Comment = new Comment(Date.now(), "Ẩn danh", "Không có comment")

  constructor(
    private apartmentService: ApartmentService,
    public formatNumberService: FormatNumberService,
    private route: ActivatedRoute,
    public commentService: CommentService,
    public cartService: CartService
  ) { }


  apartment: any;

  apartments: Apartment[] = [];
  ngOnInit(): void {
    this.route.params
      .subscribe(param => {
        this.param = param.id;
      })

    this.apartmentService.fetchApartments(this.param).subscribe(
      (response) => {
        this.apartment = response
      });
  }
  isFirst(img: Image) {
    return img.id == this.apartment.images[0].id;
  }

  fillContent() {
    return this.apartment.details;
  }
  getMap() {
    return this.apartment.project.map;
  }

  // Add to cart 
  addToCart(apartment: Apartment) {
    this.cartService.addToCart(apartment)
    this.cartNumberFunc()
  }

  // Increase number of item in cart realtime
  cartNumber: number = 0
  cartNumberFunc() {
    let count = 0
    let cartValue = JSON.parse(localStorage.getItem('localCart') || '{}')
    this.cartNumber = cartValue.length
    for (let i = 0; i < cartValue.length; i++) {
      count += cartValue[i].quantity
    }
    this.cartNumber = count
    this.cartService.cartSubject.next(this.cartNumber)
  }

  // For comment part
  sendComment(apartment: Apartment, comment: string) {
    if (!comment) {
      window.alert('Bạn phải nhập bình luận')
    } else {
      if (!localStorage.getItem('user')) {
        this.comment.author = "Ẩn danh"
      } else {
        let user = JSON.parse(localStorage.getItem('user') || '{}')
        this.comment.author = user['email']
      }
      this.comment.comment = comment
      this.commentService.addComment(apartment, this.comment)
      this.textComment = ''
    }
  }

}
