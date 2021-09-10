import { Component, OnInit } from '@angular/core';
import { faBed, faLocationArrow, faChartArea, faBath, faCompass } from '@fortawesome/free-solid-svg-icons';
import { Apartment } from 'src/app/model/apartment.model';
import { ApartmentService } from 'src/app/services/apartment.service';
import { Image } from 'src/app/model/image.model';
import { FormatNumberService } from 'src/app/services/format-number.service';
import { ActivatedRoute } from '@angular/router';
import { Comment } from '../../../model/comment.model';
import { CommentService } from '../../../services/comment.service';

@Component({
  selector: 'app-productsingle',
  templateUrl: './product-single.component.html',
  styleUrls: ['./product-single.component.scss']
})
export class ProductSingleComponent implements OnInit {

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
    public commentService: CommentService
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

  // For comment part
  sendComment(comment: string) {
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
      this.commentService.updateComment(this.param, this.comment)
    }
  }
}
