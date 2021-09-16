import { Component, OnInit } from '@angular/core';
import { faHome, faClock, faPhoneSquareAlt } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-footer2',
  templateUrl: './footer2.component.html',
  styleUrls: ['./footer2.component.scss']
})
export class Footer2Component implements OnInit {

  constructor() { }
  // Icon
  faHome = faHome;
  faClock = faClock;
  faPhoneSquareAlt = faPhoneSquareAlt;

  ngOnInit(): void {
  }

}
