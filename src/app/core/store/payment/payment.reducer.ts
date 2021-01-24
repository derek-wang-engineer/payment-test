import { PaymentActionTypes, PaymentActions } from './payment.action';
import { Card, IPaymentState } from './payment.model';

export const initialState: IPaymentState = {
  cards: []
};

export function PaymentReducer(state = initialState, action: PaymentActions) {
  switch (action.type) {
    case PaymentActionTypes.Create:
      return {
        ...state,
        cards: [ ...state.cards, action.payload ]
      };
    case PaymentActionTypes.Delete:
      return {
        ...state,
        cards: [ ...state.cards.filter(item => item.cardNumber !== action.payload.cardNumber) ]
      }
    case PaymentActionTypes.LoadSuccess:
      console.log('Payload', action.payload);
      return {
        ...state,
        cards: [ ...action.payload ]
      }
    default:
      return state;
  }
}
