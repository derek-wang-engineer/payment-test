import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { PaymentService } from '../../services/payment.service';
import { CreateCard, PaymentActionTypes } from './payment.action';
import { EMPTY } from 'rxjs';
import { map, catchError, mergeMap } from 'rxjs/operators';

@Injectable()
export class PaymentEffects {
  constructor(
    private actions$: Actions,
    private _paymentService: PaymentService
  ) {
  }

  @Effect()
  createCard$ = this.actions$.pipe(
    ofType<CreateCard>(PaymentActionTypes.Create),
    mergeMap((action: CreateCard) =>
      this._paymentService.createCard(action.payload).pipe(
        map(() => {
          console.log('Reached Here', action.payload);
          return {
            type: PaymentActionTypes.CreateSuccess,
            payload: action.payload
          };
        }),
        catchError(() => EMPTY)
      )
    )
  )

  @Effect()
  loadCards$ = this.actions$.pipe(
    ofType(PaymentActionTypes.Load),
    mergeMap(() =>
      this._paymentService.loadCards().pipe(
        map(cards => {
          return {
            type: PaymentActionTypes.LoadSuccess,
            payload: cards
          }
        }),
        catchError(() => EMPTY)
      )
    )
  );
}
