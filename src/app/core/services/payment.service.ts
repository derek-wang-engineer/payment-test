import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Card } from '../store/payment/payment.model';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {
  constructor(private _http: HttpClient) {
  }

  public createCard(card: Card) {
    return this._http.post('http://localhost:3000/cards', card);
  }

  public loadCards() {
    return this._http.get('http://localhost:3000/cards');
  }
}
