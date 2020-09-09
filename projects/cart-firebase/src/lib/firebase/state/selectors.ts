import { createSelector, createFeatureSelector } from '@ngrx/store';

export interface ShoppingState {
  items: [];
  cart: any;
  currentUser: any;
  carts: [];
}

export interface AppState {
  shopping: ShoppingState;
}

export const selectShopping = (state: any) => state.shopping;

export const selectShoppingCarts = createSelector(
  selectShopping,
  (shopping: ShoppingState) => {
    return shopping?.carts
  }
);

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

export const selectShoppingCurrentUser = createSelector(
  selectShopping,
  (shopping: ShoppingState) => {
    return shopping?.currentUser
  }
)
