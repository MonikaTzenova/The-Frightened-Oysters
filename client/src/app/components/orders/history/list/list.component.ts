import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { IOrder } from '../../../../models/IOrder';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class OordersListComponent implements OnInit {
  private orders: IOrder[];

  constructor(private activateRoute: ActivatedRoute) { }

  ngOnInit() {
    this.orders = this.activateRoute.snapshot.data['orders'];
  }
}
