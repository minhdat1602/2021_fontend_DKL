import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Apartment } from '../model/apartment.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Comment } from '../model/comment.model';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(
    private httpClient: HttpClient
  ) { }

  private apiServer = "http://localhost:5000/apartments"
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  updateComment(id: any, comment: Comment) {
    let comments = []
    return this.httpClient.get<Comment>(`${this.apiServer}\\${id}\\comments`).subscribe(
      (response) => {
        comments = [...Array(response), comment]
        return this.httpClient.post<Comment>(`${this.apiServer}\\${id}\\comments`, JSON.stringify(comments), this.httpOptions)
      }
    )
  }

}
