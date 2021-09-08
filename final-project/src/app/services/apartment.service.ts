import { Injectable } from '@angular/core';
import { Apartment } from '../model/apartment.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApartmentService {
  
  private apiUrl = "http://localhost:5000/apartments";
  constructor(private http: HttpClient) { }
  fetchApartments(): Observable<Apartment[]> {

    const a = this.http.get<Apartment[]>(this.apiUrl);
    // a.subscribe((apartments) =>  console.log(apartments));
    return a
  }
}
