import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';

import { FirestoreService, Item } from 'cart-firebase'

import { SetItems } from './actions';

@Injectable()
export class Effects {

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

  constructor(
    private actions$: Actions,
    private firestoreService: FirestoreService
  ) {}
}
