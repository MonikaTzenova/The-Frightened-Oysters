import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../../services/products.service';
import { UsersService } from '../../../services/users.service';
import { CartService } from '../../../services/cart.service';
import { HelperServiceService } from '../../../services/helper-service.service';

import { IProduct } from '../../../models/IProduct';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  private products: IProduct[];
  private productsOdd: IProduct[];
  private productsEven: IProduct[];
  private cartProducts: IProduct[];

  constructor(
    private activateRoute: ActivatedRoute,
    private cartService: CartService,
    private helperServiceService: HelperServiceService
  ) {
    this.productsOdd = [];
    this.productsEven = [];
  }

  ngOnInit() {
    this.products = this.activateRoute.snapshot.data['products'];
    this.helperServiceService.buildOddAndEvenElements(this.products, this.productsOdd, this.productsEven);
    this.cartProducts = this.cartService.getProducts();
  }
}
