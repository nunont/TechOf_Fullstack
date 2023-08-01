import { Component } from '@angular/core';
import { Product } from './product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Manage Products';

  selectedProduct!: Product;

  selectProductAppComponent(product: Product) {
    this.selectedProduct = product;
  }
}
