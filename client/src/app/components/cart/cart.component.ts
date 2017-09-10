import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';

import { IProduct } from './../../models/IProduct';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  private cartProducts: IProduct[];
  private totalPrice = 0;
  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.fetchCartProducts();
  }

  fetchCartProducts() {
    this.cartProducts = this.cartService.getProducts();
    this.totalPrice = this.cartProducts.reduce((prevValue: number, currentValue: IProduct) => {
      return prevValue + currentValue.price;
    }, 0);
  }

  private removeProduct(product: IProduct) {
    this.cartService.removeProduct(product);
    this.fetchCartProducts();
  }
}
