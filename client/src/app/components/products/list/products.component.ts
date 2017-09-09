import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../../services/products.service';
import { HelperServiceService } from '../../../services/helper-service.service';
import { UsersService } from '../../../services/users.service';

import { IProduct } from '../../../models/IProduct';
import { IUser } from '../../../models/IUser';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  private products: IProduct[];
  private productsOdd: IProduct[];
  private productsEven: IProduct[];
  public user: IUser;

  constructor(private activateRoute: ActivatedRoute, private helperServiceService: HelperServiceService, private userService: UsersService) {
    this.productsOdd = [];
    this.productsEven = [];
  }

  ngOnInit() {
    this.products = this.activateRoute.snapshot.data['products'];
    this.helperServiceService.buildOddAndEvenElements(this.products, this.productsOdd, this.productsEven);

    this.userService.getLogged()
      .subscribe(user => {
        this.user = user;
      });
  }
}
