import { Component, OnInit } from '@angular/core';
import Aos from 'aos';
import { EventService } from 'src/app/services/event.service';
import { Event } from "src/app/model/event";

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent implements OnInit {

  constructor(private _eventService: EventService) { }

  events: Event[] = [];
  all: boolean = false;
  ngOnInit(): void {
    Aos.init();
    this.fetchEventLimit();
  }

  fetchEvents(): void {
    this._eventService.fetchEventAll().subscribe((events) => {
      this.events = events;
      this.all = true;
    });
  }

  fetchEventLimit(): void {
    this._eventService.fetchEventLimit().subscribe((events) => {
      this.events = events;
      this.all = false;
    });
  }

}
