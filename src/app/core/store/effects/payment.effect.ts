import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { PaymentService } from '../../services/payment.service';
import { ActionTypes } from '../actions/payment.actions';
import { EMPTY } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable()
export class PaymentEffects {
  constructor(
    private actions$: Actions,
    private _paymentService: PaymentService
  ) {
  }

  @Effect()
  loadCards$ = this.actions$.pipe(
    map(cards => {
      return {
        type: ActionTypes.LoadSuccess,
        payload: cards
      }
    }),
    catchError(() => EMPTY)
  );
}
