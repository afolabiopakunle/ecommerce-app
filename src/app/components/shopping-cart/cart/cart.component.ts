import { Component, OnInit } from '@angular/core';
import { Products } from 'src/app/models/product';
import { MessengerService } from 'src/app/services/messenger.service';
import { ProductsService } from 'src/app/services/product.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartItems = [
    // {id: 1, productName: "Product A", qty: 3, price: 200},
    // {id: 2, productName: "Product F", qty: 6, price: 1800},
    // {id: 3, productName: "Product E",  qty: 1, price: 100},
    // {id: 4, productName: "Product D",  qty: 2, price: 1100},
    // {id: 5, productName: "Product B",  qty: 3, price: 1200},
  ];


  cartTotal = 0;

  
  addProductToCart(product: Products) {

    let productExists = false;

    for(let i in this.cartItems) {
      if(this.cartItems[i].productId === product.id) {
        this.cartItems[i].qty++;
        productExists = true
        break;
      }
    }

    if(!productExists) {
      this.cartItems.push({
        productId: product.id,
        productName: product.name,
        qty: 1,
        price: product.price
      })
    }

  }

  constructor(private msg: MessengerService) { }

  ngOnInit(): void {

    this.msg.getMessage().subscribe((product: Products) => {

      this.addProductToCart(product)
      this.cartItems.forEach(item => {
        this.cartTotal += (item.price * item.qty)
      })
    })


  }



}
