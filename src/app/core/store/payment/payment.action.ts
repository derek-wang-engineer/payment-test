import { Action } from '@ngrx/store';
import { Card } from './payment.model';

export enum PaymentActionTypes {
  Create = '[Payment] Add Card',
  CreateSuccess = '[Payment] Create Success',
  Load = '[Payment] Load cards from server',
  LoadSuccess = '[Payment] Load Success'
}

export class CreateCard implements Action {
  readonly type = PaymentActionTypes.Create;

  constructor(public payload: Card) {
  }
}

export class CreateCardSuccess implements Action {
  readonly type = PaymentActionTypes.CreateSuccess;

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

export type PaymentActions = CreateCard | CreateCardSuccess | LoadCard | LoadCardSuccess;
