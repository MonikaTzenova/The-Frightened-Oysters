import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ProductsService } from '../../../services/products.service';
import { PromotionsService } from '../../../services/promotions.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import { CartService } from '../../../services/cart.service';

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
    private promotionsService: PromotionsService,
    private cartService: CartService) { }

  ngOnInit() {
    this.products = this.productsService.getAll();
    this.promotions = this.promotionsService.getAll();
    // const eventObservable = Observable.fromEvent(this.input.nativeElement, 'keyup');
    // eventObservable.subscribe();
  }

  addPromoToCart(addPromoBtn, removePromoBtn) {
    addPromoBtn.className = 'hidden';
    removePromoBtn.className = 'btn btn-danger btn-lg btn-block';

    const id = addPromoBtn.name;

    this.promotions.findIndex(el => {
      if (el.id === id) {
        this.cartService.items.push(el);
      }
    });
  }

  removePromoFromCart(addPromoBtn, removePromoBtn) {
    removePromoBtn.className = 'hidden';
    addPromoBtn.className = 'btn btn-success btn-lg btn-block';

    const id = addPromoBtn.name;
    const idexOfItem = this.cartService.items.findIndex(el => el.id === id);

    this.cartService.items.splice(idexOfItem, 1);
  }

  addProductToCart(addProductBtn, removeProductBtn) {
    addProductBtn.className = 'hidden';
    removeProductBtn.className = 'btn btn-danger btn-lg btn-block';

    const id = +addProductBtn.name;

    this.products.findIndex(el => {
      if (el.id === id) {
        this.cartService.items.push(el);
      }
    });
  }

  removeProductFromCart(addProductBtn, removeProductBtn) {
    removeProductBtn.className = 'hidden';
    addProductBtn.className = 'btn btn-success btn-lg btn-block';

    const id = addProductBtn.name;
    const idexOfItem = this.cartService.items.findIndex(el => el.id === id);

    this.cartService.items.splice(idexOfItem, 1);
  }
}
