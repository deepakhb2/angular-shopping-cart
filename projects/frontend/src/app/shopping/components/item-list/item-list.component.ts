import { Component, OnInit } from '@angular/core';
import { NbAuthService } from '@nebular/auth';

import { FirestoreService } from 'cart-firebase'
import { Item } from 'cart-firebase';

import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import {
  selectShoppingItems,
  AuthGuardService,
} from 'cart-firebase';

@Component({
  selector: 'app-shopping-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss']
})
export class ItemListComponent implements OnInit {
  items$: Observable<Item[]>;

  constructor(
    private store: Store,
    private authService: AuthGuardService,
    private firestoreService: FirestoreService
  ) { }

  ngOnInit(): void {
    this.store.dispatch({ type: 'Load Items' });
    this.items$ = this.store.select(selectShoppingItems);
  }

  addToCart(item: Item): void {
    this.store.dispatch({type: 'Add Item To Cart', payload: item, userID: 1});
  }
}
