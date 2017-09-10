import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../../services/products.service';
import { UsersService } from '../../../services/users.service';
import { CartService } from '../../../services/cart.service';

import { IProduct } from '../../../models/IProduct';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  private products: IProduct[];
  private cartProducts: IProduct[];

  constructor(private activateRoute: ActivatedRoute, private cartService: CartService) { }

  ngOnInit() {
    this.products = this.activateRoute.snapshot.data['products'];
    this.cartProducts = this.cartService.getProducts();
  }
}
