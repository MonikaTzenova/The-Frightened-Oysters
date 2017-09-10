import { Component, OnInit, Input, AfterContentInit } from '@angular/core';
import { CartService } from './../../../services/cart.service';

import { IProduct } from '../../../models/IProduct';

@Component({
  selector: 'app-list-product-element',
  templateUrl: './list-product-element.component.html',
  styleUrls: ['./list-product-element.component.css']
})
export class ListProductElementComponent implements OnInit, AfterContentInit {
  @Input()
  private product: IProduct;

  @Input()
  private showUrls: boolean;
  @Input()
  private cartProducts: IProduct[];
  private remoteFromCartButton = false;

  constructor(private cartService: CartService) { }

  ngAfterContentInit(): void {
    if (typeof this.showUrls === 'undefined') {
      this.showUrls = true;
    }
    if (!this.cartProducts) {
      this.cartProducts = [];
    }

    // Check if product is added to cart
    if (this.cartProducts.find(p => p.id === this.product.id)) {
      this.remoteFromCartButton = true;
    }
  }

  ngOnInit() {
  }

  addProductToCart() {
    this.cartService.addProduct(this.product);
    this.remoteFromCartButton = true;
  }

  removeProductFromCart() {
    this.cartService.removeProduct(this.product);
    this.remoteFromCartButton = false;
  }

}
