import { Component, OnInit, Input } from '@angular/core';
import { IProduct } from '../../../models/IProduct';

@Component({
  selector: 'app-list-product-element',
  templateUrl: './list-product-element.component.html',
  styleUrls: ['./list-product-element.component.css']
})
export class ListProductElementComponent implements OnInit {
  @Input()

  product: IProduct;

  constructor() { }

  ngOnInit() {
  }

}
