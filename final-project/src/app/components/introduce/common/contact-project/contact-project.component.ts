import { Component, OnInit } from '@angular/core';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-contact-project',
  templateUrl: './contact-project.component.html',
  styleUrls: ['./contact-project.pc.scss','./contact-project.mobile.scss']
})
export class ContactProjectComponent implements OnInit {
  faShoppingCart = faShoppingCart
  constructor() { 
  }


  click = false;
  closeForm(){
    this.click = false;
  }
  clickContact(){
      this.click = true;
  }

  ngOnInit(): void {
  }

}
