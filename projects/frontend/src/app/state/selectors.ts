import { createSelector, createFeatureSelector } from '@ngrx/store';

export interface ShoppingState {
  items: [];
}

export interface AppState {
  shopping: ShoppingState;
}

export const selectShopping = (state: any) => state.shopping;

export const selectShoppingItems = createSelector(
  selectShopping,
  (shopping: ShoppingState) => {
    return shopping?.items
  }
);

export const selectShoppingCart = createSelector(
  selectShopping,
  (shopping: ShoppingState) => {
    return shopping?.cart
  }
);
