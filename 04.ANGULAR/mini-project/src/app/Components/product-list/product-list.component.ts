import { Component, Output, EventEmitter } from '@angular/core';

import { Product } from 'src/app/product';
import { PRODUCTS } from '../../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})


export class ProductListComponent {
  products = PRODUCTS;

  @Output() selectProduct = new EventEmitter<Product>();

  selectProductClick(product: Product) {
    this.selectProduct.emit(product);
  }

}
