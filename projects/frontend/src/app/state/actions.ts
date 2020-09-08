import { createAction, Action } from '@ngrx/store';

export const getItems = createAction('GetItems');


export class SetItems implements Action {
  //public type: string;
  readonly type = '[Items API] Items Loaded';

  constructor(public payload?: any) {}
}
