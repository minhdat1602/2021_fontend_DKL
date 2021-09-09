import { Component, OnInit } from '@angular/core';
import { faBed, faLocationArrow, faChartArea, faBath, faCompass } from '@fortawesome/free-solid-svg-icons';
import { Apartment } from 'src/app/model/apartment.model';
import { ApartmentService } from 'src/app/services/apartment.service';
import { Image } from 'src/app/model/image.model';
import { FormatNumberService } from 'src/app/services/format-number.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-productsingle',
  templateUrl: './product-single.component.html',
  styleUrls: ['./product-single.component.scss']
})
export class ProductSingleComponent implements OnInit {

  private param?: String

  faBed = faBed
  faLocationArrow = faLocationArrow
  faChartArea = faChartArea
  faBath = faBath
  faCompass = faCompass

  constructor(
    private apartmentService: ApartmentService,
    public formatNumberService: FormatNumberService,
    private route: ActivatedRoute,
  ) { }


  apartment: any;

  apartments: Apartment[] = [];
  ngOnInit(): void {
    this.route.params
      .subscribe(param => {
        this.param = param.id;
        console.log(this.param)
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
}
