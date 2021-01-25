import { PaymentActionTypes, PaymentActions } from './payment.action';
import { Card, IPaymentState } from './payment.model';

export const initialState: IPaymentState = {
  cards: []
};

export function PaymentReducer(state = initialState, action: PaymentActions) {
  switch (action.type) {
    case PaymentActionTypes.CreateSuccess:
      return {
        ...state,
        cards: [ ...state.cards, action.payload ]
      };
    case PaymentActionTypes.LoadSuccess:
      return {
        ...state,
        cards: [ ...action.payload ]
      };
    default:
      return state;
  }
}
