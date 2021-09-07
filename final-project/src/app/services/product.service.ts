import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  public itemsRef?: AngularFireList<any>;
  public aufgaben?: Observable<any[]>;

  public product?: Observable<any>;

  constructor(private afDb: AngularFireDatabase) { }
  ngOnInit() {

  }

  getAllProduct = () => {
    this.itemsRef = this.afDb.list('products')
    this.aufgaben = this.itemsRef.valueChanges();
    return this.aufgaben
  }

  getProduct = (id: string) => {
    this.product = this.afDb.object('/products/canho' + id).valueChanges()
    return this.product
  }
}
