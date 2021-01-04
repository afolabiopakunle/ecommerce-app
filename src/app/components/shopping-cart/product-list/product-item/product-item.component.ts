import { Component, OnInit, Input } from '@angular/core';
import { Products } from 'src/app/models/product';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  @Input() productItem: Products;

  constructor() { }

  ngOnInit(): void {
  }

}
