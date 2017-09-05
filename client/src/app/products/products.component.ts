import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { PromotionsService } from '../services/promotions.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
    @ViewChild('input')
    input: ElementRef;
	products;
	promotions;
	
	constructor(private productsService: ProductsService,
		private promotionsService: PromotionsService) { }

  ngOnInit() {
    this.products = this.productsService.getAll();
    this.promotions = this.promotionsService.getAll();
	let eventObservable = Observable.fromEvent(this.input.nativeElement, 'keyup')
    eventObservable.subscribe();
  }
}
