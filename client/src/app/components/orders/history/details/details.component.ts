import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrdersServiceService } from '../../../../services/orders-service.service';
import { HelperServiceService } from '../../../../services/helper-service.service';

import { IOrder } from '../../../../models/IOrder';
import { IProduct } from '../../../../models/IProduct';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class OrderDetailsComponent implements OnInit {
  private order: IOrder;
  private productsOdd: IProduct[]
  private productsEven: IProduct[]

  constructor(
    private activateRoute: ActivatedRoute,
    private ordersServiceService: OrdersServiceService,
    private helperServiceService: HelperServiceService
  ) {
    this.productsOdd = [];
    this.productsEven = [];
  }

  ngOnInit() {
    const orderId = parseInt(this.activateRoute.snapshot.params['id']);
    this.ordersServiceService.getById(orderId)
      .subscribe(order => {
        this.order = order;
        this.helperServiceService.buildOddAndEvenElements(order.products, this.productsOdd, this.productsEven);
      });
  }

}
