import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Action, ActionsSubject } from '@ngrx/store';
import { Subject } from 'rxjs';
import { filter, takeUntil } from 'rxjs/operators';
import { PaymentActionTypes } from './core/store/payment/payment.action';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [
    './app.component.scss'
  ]
})
export class AppComponent implements OnInit, OnDestroy {
  private _unsubscribeAll: Subject<void>;
  constructor(
    private actionsSubject$: ActionsSubject,
    private _snackBar: MatSnackBar
  ) {
    this._unsubscribeAll = new Subject();
  }

  ngOnInit() {
    this.actionsSubject$.pipe(
      filter((action: Action) => action.type === PaymentActionTypes.CreateSuccess),
      takeUntil(this._unsubscribeAll)
    ).subscribe((action) => {
      this._snackBar.open('New Credit Card is Registered Successfully', 'Close', {
        duration: 3500
      });
    });
  }

  ngOnDestroy() {
    this._unsubscribeAll.next();
    this._unsubscribeAll.complete();
  }
}
