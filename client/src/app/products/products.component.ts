import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../core-module/products.service';
import { PromotionsService } from '../core-module/promotions.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  constructor(private productsService: ProductsService,
    private promotionsService: PromotionsService) { }
  products;
  promotions;
  ngOnInit() {
    this.products = this.productsService.getAll();
    this.promotions = this.promotionsService.getAll();
  }
}
