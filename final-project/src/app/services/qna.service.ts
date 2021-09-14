import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Qna } from '../model/qna.class';

@Injectable({
  providedIn: 'root'
})
export class QnaService {

  private apiURL = 'http://localhost:5000/questions'

  constructor(
    private httpClient: HttpClient
  ) {

  }

  getAllQna(): Observable<Qna[]> {
    return this.httpClient.get<Qna[]>(this.apiURL)
  }

}
