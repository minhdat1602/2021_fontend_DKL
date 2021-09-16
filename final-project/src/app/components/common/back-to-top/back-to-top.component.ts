import { Component, OnInit } from '@angular/core';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-back-to-top',
  templateUrl: './back-to-top.component.html',
  styleUrls: ['./back-to-top.pc.scss','./back-to-top.mobile.scss']
})
export class BackToTopComponent implements OnInit {
  faArrowUp= faArrowUp;
  constructor() { }

  scrollTop(){
    window.scroll(0,0);
  }

  ngOnInit(): void {
  }


}