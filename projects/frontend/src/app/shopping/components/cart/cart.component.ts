import { Component, OnInit } from '@angular/core';

import { FirestoreService } from 'cart-firebase'
import { Item, Cart } from 'cart-firebase';

import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import {
  createEmptyCart,
  selectShoppingCart,
} from 'cart-firebase';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cart$: Observable<Cart>;

  constructor(
    private store: Store<{ items: number }>,
    private firestoreService: FirestoreService
  ) { }

  ngOnInit(): void {
    this.store.dispatch(createEmptyCart());
    this.cart$ = this.store.select(selectShoppingCart);
  }
}
