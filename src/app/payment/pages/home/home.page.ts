import { Component, OnInit } from '@angular/core';
import { ActionsSubject, select, Store } from '@ngrx/store';
import { LoadCard } from '../../../core/store/payment/payment.action';
import { State } from '../../../core/store/state';
import { Card, IPaymentState } from '../../../core/store/payment/payment.model';
import { MatDialog } from '@angular/material/dialog';
import { CardRegisterComponent } from '../../components/card-register/card-register.component';

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
    private _store: Store<State>,
    public dialog: MatDialog
  ) {
    this._store.pipe(select('payment')).subscribe((data: IPaymentState) => {
      this.cards = data.cards;
    });
  }

  ngOnInit(): void {
    this._store.dispatch(new LoadCard());
  }

  public openAddForm() {
    const dialogRef = this.dialog.open(CardRegisterComponent);
    dialogRef.afterClosed().subscribe(result => {
    });
  }
}
