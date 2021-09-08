import { Component, OnInit } from '@angular/core';
import AOS from 'aos';
@Component({
  selector: 'app-west-point',
  templateUrl: './west-point.component.html',
  styleUrls: ['./west-point.component.scss']
})
export class WestPointComponent implements OnInit {
  typewriter_text: string = "XINHOMES  WEST  POINT";
  typewriter_display: string = "";
  typingCallback(that: this) {
    let total_length = that.typewriter_text.length;
    let current_length = that.typewriter_display.length;
    if (current_length < total_length) {
      that.typewriter_display += that.typewriter_text[current_length];
      setTimeout(that.typingCallback, 100, that);
    } else {
      this.typewriter_display = "";
    }
  }
  constructor() { }

  ngOnInit(): void {
    AOS.init();
    this.typingCallback(this);
  }

}
