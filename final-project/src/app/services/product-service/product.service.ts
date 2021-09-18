import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from 'src/app/model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private apiUrl = "http://localhost:5000/products";
  constructor(private http: HttpClient) { }

  fetchProducts(): Observable<Product[]> {
    console.log("fetch XXX");
    return this.http.get<Product[]>(this.apiUrl);
  }

  httpOptions = {
    headers: new HttpHeaders({
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
    })
  }

  private highlightUrl = "http://mobile2021group17.herokuapp.com/home/highlight";
  fetchHighLight(): Observable<Product[]> {
    return this.http.get<Product[]>(this.highlightUrl, this.httpOptions);
  }

  fetchByKey(keyword: String): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiUrl + "?keyword=" + keyword);
  }
}
