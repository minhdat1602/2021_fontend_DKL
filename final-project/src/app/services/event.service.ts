import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  eventUrl: string = "http://localhost:5000/events";
  constructor(private _http: HttpClient) {
  }

  fetchEventAll(): Observable<any> {
    return this._http.get(this.eventUrl);
  }

  fetchEventOne(id: number): Observable<any> {
    let url = this.eventUrl + "/" + id;
    console.log(url);
    return this._http.get(url);
  }
}
