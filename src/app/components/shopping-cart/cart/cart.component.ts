import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartItems = [
    {id: 1, productName: "Product A", qty: 3, price: 200},
    {id: 2, productName: "Product F", qty: 6, price: 1800},
    {id: 3, productName: "Product E",  qty: 1, price: 100},
    {id: 4, productName: "Product D",  qty: 2, price: 1100},
    {id: 5, productName: "Product B",  qty: 3, price: 1200},
  ];


  cartTotal = 0;

  constructor() { }

  ngOnInit(): void {
    this.cartItems.forEach(item => {
      this.cartTotal += (item.price * item.qty)
    })
  }

}
