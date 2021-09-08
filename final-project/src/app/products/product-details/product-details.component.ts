import { Component, OnInit } from '@angular/core';
import { faBed,faLocationArrow,faChartArea, faBath, faCompass} from '@fortawesome/free-solid-svg-icons';
import { Apartment } from 'src/app/model/apartment.model';
import { ApartmentService } from 'src/app/services/apartment.service';
import { Image } from 'src/app/model/image.model';
import { FormatNumberService } from 'src/app/services/format-number.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})

export class ProductDetailsComponent implements OnInit {
  faBed = faBed
  faLocationArrow =faLocationArrow
  faChartArea= faChartArea
  faBath = faBath
  faCompass = faCompass

  constructor(
    private apartmentService: ApartmentService,
    public formatNumberService: FormatNumberService
    ) {}
 

  apartment: any;
 
  apartments: Apartment[] = [];
  ngOnInit(): void {
    this.apartmentService.fetchApartments().subscribe((apartments)=>
      {
        this.apartment = apartments[0];
        console.log(apartments);
      });

  }
  isFirst(img: Image){
    return img.id == this.apartment.images[0].id;
  }

  fillContent(){
      return this.apartment.details;
  }


}
