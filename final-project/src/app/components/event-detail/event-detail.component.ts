import { Component, Input, OnInit } from '@angular/core';
import AOS from 'aos';
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { Event } from 'src/app/model/event';
import { EventService } from 'src/app/services/event.service';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.scss']
})
export class EventDetailComponent implements OnInit {

  private _routeSub?: Subscription;
  constructor(private _eventService: EventService,
    private _route: ActivatedRoute) { }

  // icon
  faChevronRight = faChevronRight;
  faChevronLeft = faChevronLeft;

  //
  _id?: any;
  eventPrevious?: Event;
  eventNext?: Event;

  ngOnInit(): void {
    AOS.init();

    this._route.params.forEach((param) => {
      this._id = param['id'];
      this.fetchItem(this._id);

      // Code lại sau
      if (this._id == 1) {
        this._eventService.fetchEventOne(6).subscribe((event) => {
          this.eventPrevious = event;
        });
      } else {
        this._eventService.fetchEventOne((this._id - 1)).subscribe((event) => {
          this.eventPrevious = event;
        });
      }
      this._eventService.fetchEventOne((this._id + 1)).subscribe((event) => {
        this.eventNext = event;
      });

    }
    );

  }

  ngOnDestroy() {
    this._routeSub?.unsubscribe();
  }


  event?: Event;
  fetchItem(id: number): void {
    this._eventService.fetchEventOne(id).subscribe((event) => {
      this.event = event;
      console.log(this.event);
    });
  }

}
