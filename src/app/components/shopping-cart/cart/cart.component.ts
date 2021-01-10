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

  cartItems = [];
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
        productName: product.productName,
        qty: 1,
        price: product.price
      })
    }

  }

  constructor(private msg: MessengerService) { }

  ngOnInit(): void {

    this.msg.getMessage().subscribe((product: Products) => {
      this.addProductToCart(product)
      console.log(product)
      this.cartItems.forEach(item => {
        this.cartTotal += (item.price * item.qty)
      })
    })
  }
}
