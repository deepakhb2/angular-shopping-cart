import { Component, OnInit } from '@angular/core';
import { NbAuthService } from '@nebular/auth';

import { FirestoreService } from 'cart-firebase'
import { Item } from 'cart-firebase';

import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { getItems } from '../../../state/actions';
import { selectShoppingItems } from '../../../state/selectors';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss']
})
export class ItemListComponent implements OnInit {
  items$: Observable<Item[]>;

  constructor(
    private store: Store<{ items: number }>,
    private authService: NbAuthService,
    private firestoreService: FirestoreService
  ) { }

  ngOnInit(): void {
    this.store.dispatch({ type: 'Load Items' });
    this.items$ = this.store.select(selectShoppingItems);
  }
}
