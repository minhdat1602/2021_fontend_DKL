import { Component, Input, OnInit } from '@angular/core';
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent implements OnInit {
  @Input() message = ''
  @Input() type: boolean = false

  faCheck = faCheck
  faTimes = faTimes
  constructor() { }


  ngOnInit(): void {
    // setTimeout();
  }

}
