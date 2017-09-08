import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../../services/products.service';

import { IProduct } from '../../../models/IProduct';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: IProduct[];
  productsOdd: IProduct[];
  productsEven: IProduct[];

  constructor(private activateRoute: ActivatedRoute) { 
    this.productsOdd = [];
    this.productsEven = [];
  }

  ngOnInit() {
    this.products = this.activateRoute.snapshot.data['products'];

    for (let i = 0; i < this.products.length; i += 1) {
      let currentProduct = this.products[i];
      if (i % 2 === 0) {
        this.productsOdd.push(currentProduct);
      } else {
        this.productsEven.push(currentProduct);
      }
    }
  }
}
