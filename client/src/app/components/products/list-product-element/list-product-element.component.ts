import { Component, OnInit, Input, AfterContentInit } from '@angular/core';
import { IProduct } from '../../../models/IProduct';

@Component({
  selector: 'app-list-product-element',
  templateUrl: './list-product-element.component.html',
  styleUrls: ['./list-product-element.component.css']
})
export class ListProductElementComponent implements OnInit, AfterContentInit {
  @Input()

  product: IProduct;
  
  @Input()
  showUrls: boolean

  constructor() { }

  ngAfterContentInit(): void {
    if (typeof this.showUrls === 'undefined') {
      this.showUrls = true;
    }
  }

  ngOnInit() {
  }

}
