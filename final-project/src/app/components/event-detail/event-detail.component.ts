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
  event?: Event;
  //
  _id?: any;
  eventPrevious?: number;
  eventNext?: number;
  events: Event[] = [];
  fetchEvents(): void {
    this._eventService.fetchEventLimit().subscribe((events) => {
      this.events = events;
    });
  }
  ngOnInit(): void {
    AOS.init();
    this.fetchEvents();
    this._route.params.forEach((param) => {
      this._id = param['id'];
      this.fetchItem(this._id);
    }
    );

  }

  ngOnDestroy() {
    this._routeSub?.unsubscribe();
  }



  fetchItem(id: number): void {
    this._eventService.fetchEventOne(id).subscribe((event) => {
      this.event = event;
      console.log(this.event);
    });
  }

}
