import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-header-page',
  templateUrl: './header-page.component.html',
  styleUrls: ['./header-page.pc.scss', './header-page.mobile.scss']
})
export class HeaderPageComponent implements OnInit {
  @Input() name = '' 
  constructor() { }

  ngOnInit(): void {
  }

}
