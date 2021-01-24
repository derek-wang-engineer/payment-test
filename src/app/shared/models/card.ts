export interface Card {
  cardNumber: string;
  cardHolder: string;
  expirationDate: string;
  securityCode?: string;
  amount: number;
}
