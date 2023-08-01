import { Component, Output, EventEmitter, OnInit } from '@angular/core';

import { Product } from 'src/app/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})


export class ProductListComponent  implements OnInit{
  products : Product[] = [];

  @Output() selectProduct = new EventEmitter<Product>();

  constructor(private productService: ProductService) { 
  }

  ngOnInit(): void {
    this.productService.getProducts().subscribe(data => this.products = data);
  }

  selectProductClick(product: Product) {
    this.selectProduct.emit(product);
  }

}
