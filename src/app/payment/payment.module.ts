import { NgModule } from '@angular/core';
import { HomePage } from './pages/home/home.page';
import { PaymentRoutingModule } from './payment.routes';

@NgModule({
  declarations: [
    HomePage
  ],
  imports: [
    PaymentRoutingModule
  ]
})
export class PaymentModule {
}
