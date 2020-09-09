import * as _ from 'lodash';

import { createReducer, on } from '@ngrx/store';

export function reducer(state, action) {
  var deltaState = {}

  switch (action.type) {
    case '[Items API] Items Loaded':
      deltaState = {
        items: action.payload
      };
      return _.assign({}, state, deltaState)
    case 'Add Cart':
      deltaState = {
        cart: action.payload
      }
      return _.assign({}, state, deltaState);
    case 'Add Item To Cart':
      let item = action.payload;
      let cart = state.cart;
      deltaState = {
        cart: {
          id: cart.id,
          items: [...cart.items, item],
          total: cart.total + item.price,
          userID: cart.userID
        }
      }
      return _.assign({}, state, deltaState)
    case 'Add Current User':
      deltaState = {
        currentUser: action.payload
      }
      return _.assign({}, state, deltaState);
    default:
      return state;
  }
}
