import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { CreateCard, LoadCard } from '../../../core/store/payment/payment.action';
import { State } from '../../../core/store/state';
import { Card, IPaymentState } from '../../../core/store/payment/payment.model';

@Component({
  selector: 'app-payment-page-home',
  templateUrl: './home.page.html',
  styleUrls: [
    './home.page.scss'
  ]
})
export class HomePage implements OnInit {
  cards: Card[] = [];
  displayedColumns: string[] = [
    'cardNumber', 'cardHolder', 'expirationDate', 'securityCode', 'amount'
  ];

  constructor(
    private _store: Store<State>
  ) {
    this._store.pipe(select('payment')).subscribe((data: IPaymentState) => {
      this.cards = data.cards;
    });
  }

  ngOnInit(): void {
    this._store.dispatch(new LoadCard());
  }

  public openAddForm() {
    this._store.dispatch(new CreateCard({
      cardNumber: '4442 1111 1111 1111',
      cardHolder: 'Test Holder',
      expirationDate: '2020/12/12',
      securityCode: '12C',
      amount: 400,
    }));
  }
}
