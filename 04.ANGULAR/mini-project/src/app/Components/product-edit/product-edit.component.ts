import { Component, Input } from '@angular/core';
import { Product } from 'src/app/product';
import { PRODUCTS } from '../../products';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})

export class ProductEditComponent {
  @Input() selectedProduct!: Product;
  newProduct: Product = new Product(0, '', 0, '');
  products = PRODUCTS;
  
  createProduct() {
    console.log(this.newProduct);
    this.products.push(this.newProduct);
    this.newProduct;
  }
}
