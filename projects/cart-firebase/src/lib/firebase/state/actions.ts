import { createAction, Action } from '@ngrx/store';

export const createEmptyCart = createAction('CreateEmptyCart')

export class SetItems implements Action {
  //public type: string;
  readonly type = '[Items API] Items Loaded';

  constructor(public payload?: any) {}
}

export class AddItemToCart implements Action {
  //public type: string;
  readonly type = 'Add Item To Cart';

  constructor(public payload?: any) {}
}

export class AddCurrentUser implements Action {
  //public type: string;
  readonly type = 'Add Current User';

  constructor(public payload?: any) {}
}

export class AddCart implements Action {
  //public type: string;
  readonly type = 'Add Cart';

  constructor(public payload?: any) {}
}
