import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {
  constructor(private _http: HttpClient) {
  }

  public loadCards() {
    return this._http.get('http://localhost:3000/cards');
  }
}
