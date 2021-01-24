import { Action } from '@ngrx/store';
import { Card } from '../../../shared/models';

export enum ActionTypes {
  Create = '[Payment] Add Card',
  Delete = '[Payment] Delete Card',
  Load = '[Payment] Load cards from server',
  LoadSuccess = '[Payment] Load Success'
}

export class CreateCard implements Action {
  readonly type = ActionTypes.Create;

  constructor(public payload: Card) {
  }
}

export class DeleteCard implements Action {
  readonly type = ActionTypes.Delete;

  constructor(public payload: Card) {
  }
}

export class LoadCard implements Action {
  readonly type = ActionTypes.Load;
}

export class LoadCardSuccess implements Action {
  readonly type = ActionTypes.LoadSuccess;

  constructor(public payload: Card[]) {
  }
}

export type PaymentActions = CreateCard | DeleteCard | LoadCard | LoadCardSuccess;
