import { Injectable } from '@angular/core';
import { Products } from '../models/product';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  products: Products[] = [
    new Products(1, "product 1", "this is product 1 description", 1000),
    new Products(2, "product b", "this is product 2 description", 1600),
    new Products(3, "product c", "this is product 3 description", 1300),
    new Products(4, "product d", "this is product 4 description", 1900),
    new Products(5, "product e", "this is product 5 description", 2000)
  ]
  constructor() { }

  getProducts(): Products[] {
    return this.products;
  }

}
