import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from 'src/app/model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private apiUrl = "http://localhost:3000/products";
  constructor(private http: HttpClient) { }

  fetchProducts(): Observable<Product[]> {
    console.log("fetch XXX");
    return this.http.get<Product[]>(this.apiUrl);
  }
}
