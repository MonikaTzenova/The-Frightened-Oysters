import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HelperServiceService } from '../../../../services/helper-service.service';

import { IOrder } from '../../../../models/IOrder';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class OordersListComponent implements OnInit {
  private orders: IOrder[];
  private ordersOdd: IOrder[];
  private ordersEven: IOrder[];

  constructor(private activateRoute: ActivatedRoute, private helperServiceService: HelperServiceService) { 
    this.ordersOdd = [];
    this.ordersEven = [];
  }

  ngOnInit() {
    this.orders = this.activateRoute.snapshot.data['orders'];
    this.helperServiceService.buildOddAndEvenElements(this.orders, this.ordersOdd, this.ordersEven);
  }
}
