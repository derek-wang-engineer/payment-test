import { Action } from '@ngrx/store';
import { Card } from './payment.model';

export enum PaymentActionTypes {
  Create = '[Payment] Add Card',
  Delete = '[Payment] Delete Card',
  Load = '[Payment] Load cards from server',
  LoadSuccess = '[Payment] Load Success'
}

export class CreateCard implements Action {
  readonly type = PaymentActionTypes.Create;

  constructor(public payload: Card) {
  }
}

export class DeleteCard implements Action {
  readonly type = PaymentActionTypes.Delete;

  constructor(public payload: Card) {
  }
}

export class LoadCard implements Action {
  readonly type = PaymentActionTypes.Load;
}

export class LoadCardSuccess implements Action {
  readonly type = PaymentActionTypes.LoadSuccess;

  constructor(public payload: Card[]) {
  }
}

export type PaymentActions = CreateCard | DeleteCard | LoadCard | LoadCardSuccess;
