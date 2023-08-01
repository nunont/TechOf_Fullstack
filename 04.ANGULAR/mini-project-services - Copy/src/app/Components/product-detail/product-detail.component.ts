import { Component, Input } from '@angular/core';
import { Product } from 'src/app/product';


@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent {
  @Input() selectedProduct!: Product;
}
