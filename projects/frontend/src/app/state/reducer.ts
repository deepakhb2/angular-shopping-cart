import * as _ from 'lodash';

import { createReducer, on } from '@ngrx/store';
import { getItems, SetItems } from './actions';

export function reducer(state, action) {
  var deltaState = {}

  switch (action.type) {
    case getItems:
      return state + 1;
    case '[Items API] Items Loaded':
      deltaState = {
        items: action.payload
      };
      return _.assign({}, state, deltaState)
    default:
      return state
  }

}
