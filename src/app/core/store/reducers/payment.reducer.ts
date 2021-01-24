import { ActionTypes, PaymentActions } from '../actions/payment.actions';

export const initialState = {
  cards: []
};

export function PaymentReducer(state = initialState, action: PaymentActions) {
  switch (action.type) {
    case ActionTypes.Create:
      return {
        ...state,
        cards: [ ...state.cards, action.payload ]
      };
    case ActionTypes.Delete:
      return {
        ...state,
        cards: [ ...state.cards.filter(item => item.cardNumber !== action.payload.cardNumber) ]
      }
    case ActionTypes.LoadSuccess:
      return {
        ...state,
        cards: [ ...action.payload ]
      }
    default:
      return state;
  }
}
