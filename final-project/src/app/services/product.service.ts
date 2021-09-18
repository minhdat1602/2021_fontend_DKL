import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { HttpClient } from '@angular/common/http';
import { Product } from '../model/product';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  // public itemsRef?: AngularFireList<any>;
  // public aufgaben?: Observable<any[]>;

  // public product?: Observable<any>;

  public products?: Observable<Product[]>

  private productURL: string = "http://localhost:5000/products"

  constructor(private httpClient: HttpClient) { }
  ngOnInit() {

  }

  fetchByKey(keyword: String): Observable<Product[]> {
    return this.httpClient.get<Product[]>(this.productURL + "?keyword=" + keyword);
  }

  getAllProducts(): Observable<Product[]> {
    this.products = this.httpClient.get<Product[]>(this.productURL)
    return this.products
  }
  private highlightUrl = "https://mobile2021group17.herokuapp.com/home/highlight";
  fetchHighLight(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(this.highlightUrl);
  }

  // getAllProduct = () => {
  //   this.itemsRef = this.afDb.list('products')
  //   this.aufgaben = this.itemsRef.valueChanges();
  //   return this.aufgaben
  // }

  // getProduct = (id: string) => {
  //   this.product = this.afDb.object('/products/canho' + id).valueChanges()
  //   return this.product
  // }
}
