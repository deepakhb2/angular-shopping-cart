import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import { Component, OnInit } from '@angular/core';

import {
  FirestoreService,
  Cart,
  selectShoppingCarts,
} from 'cart-firebase'

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.scss']
})
export class CartListComponent implements OnInit {
  carts$: Observable<Cart[]>;

  constructor(
    private store: Store,
    private firestoreService: FirestoreService
  ) { }

  ngOnInit(): void {
    this.store.dispatch({ type: 'Load Carts', submitted: true });
    this.carts$ = this.store.select(selectShoppingCarts);
  }

}
