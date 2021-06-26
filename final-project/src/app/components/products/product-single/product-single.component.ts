import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service'; 

@Component({
  selector: 'app-productsingle',
  templateUrl: './product-single.component.html',
  styleUrls: ['./product-single.component.scss']
})
export class ProductSingleComponent implements OnInit {
  param: any
  public product = {
    id: 0,
    img: '',
    isAvailable: true,
    name: '',
    priceOfPiece: 0,
    soldPieces: 0,
    shortDescription: '',
    status: '',
    totalPieces: 0,
    totalPrice: 0,
    quantity: 0
  }
  public imgSrc = [
    "assets/img/slide6.jpg",
    "assets/img/slide2.jpg",
    "assets/img/slide3.jpg",
    "assets/img/slide4.jpg",
    "assets/img/slide5.jpg",
  ]

  public index = 0;
  public quantities = 1;
  showSuccessPopup: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    ) { }

  ngOnInit(): void {
    this.route.params
      .subscribe(param => {
        this.param = param.id;
      })

    this.productService.getProduct(this.param).subscribe(
      product => {
        this.product = product
      }
    )
  }

  // This code for slide images
  increIndex(): void {
    if (this.index < this.imgSrc.length - 1) {
      this.index++
    } else {
      this.index = 0
    }
  }


  decreIndex(): void {
    if (this.index <= 0) {
      this.index = this.imgSrc.length - 1
    } else {
      this.index--
    }
    console.log(this.index)
  }

  // End slide images

  // This code for increase and decrease number of products
  increNum(): void {
      this.quantities++
  }

  decreNum(): void {
    if (this.quantities > 1) {
      this.quantities--
    }
  }

  // End increase and decrease

  // format number
  

 hiddenSuccessPopup(){

 }


 addToCart(){
   
 }
}
