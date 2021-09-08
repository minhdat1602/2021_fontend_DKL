import { Component, OnInit } from '@angular/core';
import { faPhoneVolume } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor() { }
  faPhoneVolume = faPhoneVolume;

  ngOnInit(): void {
  }

}
