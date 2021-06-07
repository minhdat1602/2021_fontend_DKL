import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  dynamicSlides = [
    {
      id: '1',
      src:'assets/img/slide1.jpg',
      alt:'Side 1',
      title:'Side 1'
    },
    {
      id: '2',
      src:'assets/img/slide2.jpg',
      alt:'Side 2',
      title:'Side 2'
    },
    {
      id: '3',
      src:'assets/img/slide3.jpg',
      alt:'Side 3',
      title:'Side 3'
    },
    {
      id: '4',
      src:'assets/img/slide4.jpg',
      alt:'Side 4',
      title:'Side 4'
    },
    {
      id: '5',
      src:'assets/img/slide5.jpg',
      alt:'Side 5',
      title:'Side 5'
    },
    {
      id: '6',
      src:'assets/img/slide6.jpg',
      alt:'Side 6',
      title:'Side 6'
    }
  ]

 customOptions: OwlOptions = {
   loop: true,
   mouseDrag: false,
   touchDrag: false,
   pullDrag: false,
   dots: false,
   navSpeed: 600,
   navText: ['&#8249', '&#8250;'],
   responsive: {
     0: {
       items: 1 
     },
     400: {
       items: 2
     },
     760: {
       items: 3
     },
     1000: {
       items: 4
     }
   },
   nav: true
 }

}
