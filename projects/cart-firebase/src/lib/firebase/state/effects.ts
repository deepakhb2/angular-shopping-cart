import * as _ from 'lodash';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';

import { FirestoreService } from '../services/firestore.service'
import { Item } from '../models/item.model'
import { Cart } from '../models/cart.model'

import {
  SetItems,
  SetCarts,
  AddCart,
  createEmptyCart
} from './actions';

@Injectable()
export class Effects {

  loadCarts$ = createEffect(() => this.actions$.pipe(
    ofType('Load Carts'),
    mergeMap((action: any) => this.firestoreService.firestore.collection(
      'carts',
      ref => ref.where('submitted', '==', action.submitted)
    ).snapshotChanges()
      .pipe(
        map(data => {
          let carts = data.map(e => {
            return {
              id: e.payload.doc.id,
              // @ts-ignore
              ...e.payload.doc.data()
            } as Cart;
          })
          return new SetCarts(carts)
        }),
        catchError(() => EMPTY)
      ))
    )
  );

  loadItems$ = createEffect(() => this.actions$.pipe(
    ofType('Load Items'),
    mergeMap(() => this.firestoreService.getCollection('items')
      .pipe(
        map(data => {
          let items = data.map(e => {
            return {
              id: e.payload.doc.id,
              // @ts-ignore
              ...e.payload.doc.data()
            } as Item;
          })
          return new SetItems(items)
        }),
        catchError(() => EMPTY)
      ))
    )
  );

  loadCart$ = createEffect(() =>  this.actions$.pipe(
    ofType('Load Cart'),
    mergeMap((action: any) => {
      return this.firestoreService.firestore
        .collection(
          'carts',
          ref => ref.where('userID', '==', action.userID).where('submitted', '==', false)
        ).snapshotChanges()
      .pipe(
        map(data => {
          let cart = data.map(e => {
            return {
              id: e.payload.doc.id,
              // @ts-ignore
              ...e.payload.doc.data()
            };
          })[0]
          if(cart) {
            return new AddCart(cart)
          } else {
            let cart = {
              items: [],
              total: 0,
              userID: action.userID,
              submitted: false
            }
            this.firestoreService.createDoc(
              'carts',
              cart
            )
            return new AddCart(cart);
          }
        }),
        catchError(() => EMPTY)
      )
    })
    )
  );

  saveCart$ = createEffect(() =>  this.actions$.pipe(
    ofType('Save Cart'),
    map((action: any) => {
      let cart = action.payload;
      if(action.checkout) {
        cart = _.assign({}, cart, {submitted: true})
      }
      // Handle errors later.
      this.firestoreService.updateDoc('carts', cart)
      if(cart.submitted) {
        cart = {
          items: [],
          total: 0,
          userID: action.userID,
          submitted: false
        };
      }
      return new AddCart(cart);
    })
    )
  );

  constructor(
    private actions$: Actions,
    private firestoreService: FirestoreService
  ) {}
}
