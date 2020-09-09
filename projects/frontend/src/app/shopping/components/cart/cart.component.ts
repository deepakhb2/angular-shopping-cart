import { Component, OnInit } from '@angular/core';

import { FirestoreService } from 'cart-firebase'
import { Item, Cart } from 'cart-firebase';

import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import {
  createEmptyCart,
  selectShoppingCart,
  AuthGuardService,
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
    private authService: AuthGuardService,
    private firestoreService: FirestoreService
  ) { }

  ngOnInit(): void {
    this.store.dispatch({ type: 'Load Cart', userID: 'RoW7zWSl1FhsZ3y8MxEMuev4Ffy2' });
    this.cart$ = this.store.select(selectShoppingCart);
  }

  saveCart(cart: Cart): void {
    this.store.dispatch({ type: 'Save Cart', payload: cart, userID: 'RoW7zWSl1FhsZ3y8MxEMuev4Ffy2' });
  }

  checkoutCart(cart: Cart): void {
    this.store.dispatch({ type: 'Save Cart', payload: cart, checkout: true, userID: 'RoW7zWSl1FhsZ3y8MxEMuev4Ffy2' });
  }
}
