import { Injectable } from '@angular/core';
import { PRODUCTS } from '../products';
import { Product } from '../product';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ProductService {

  constructor() { }

  getProducts(): Observable<Product[]> { 
    let products = of(PRODUCTS)
    return products;
    //Novas cenas
  }

}
