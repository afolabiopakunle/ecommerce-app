import { Component, OnInit } from '@angular/core';
import { Products } from 'src/app/models/product';
import { ProductsService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: Products[];
  constructor(private productServices: ProductsService) { }

  ngOnInit(): void {
   this.productServices.getProducts().subscribe(data => {
    this.products = data;
    
   })
  }

}
