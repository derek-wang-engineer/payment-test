import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { LoadCard } from '../../../core/store/payment/payment.action';
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

  constructor(
    private _store: Store<IPaymentState>
  ) {
    this._store.pipe(select('cards')).subscribe((data: Card[]) => {
      this.cards = data;
      console.log('Reached Here', this.cards);
    });
  }

  ngOnInit(): void {
    this._store.dispatch(new LoadCard());
  }
}
