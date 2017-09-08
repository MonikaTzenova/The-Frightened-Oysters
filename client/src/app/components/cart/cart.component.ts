import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems;
  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.cartItems = this.cartService.items;
  }

  removePromoFromCart(removePromoBtn) {
    const id = removePromoBtn.name;
    const idexOfItem = this.cartItems.findIndex(el => el.id === id);

    this.cartItems.splice(idexOfItem, 1);
  }

  removeProductFromCart(removeProductBtn) {
    const id = +removeProductBtn.name;
    const idexOfItem = this.cartItems.findIndex(el => el.id === id);

    this.cartItems.splice(idexOfItem, 1);
  }
}
