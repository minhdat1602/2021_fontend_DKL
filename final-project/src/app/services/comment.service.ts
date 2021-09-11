import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Apartment } from '../model/apartment.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Comment } from '../model/comment.model';
import { ApartmentService } from './apartment.service';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(
    private httpClient: HttpClient,
  ) { }

  private apiServer = "http://localhost:5000/apartments"
  headers = new HttpHeaders().set('Content-Type', 'application/json')

  addComment(apartment: Apartment, comment: Comment) {
    apartment.comments = [...apartment.comments, comment]
    let API_URL = this.apiServer + `\/${apartment.id}`
    return this.httpClient.put(API_URL, apartment, { headers: this.headers })
  }

}
