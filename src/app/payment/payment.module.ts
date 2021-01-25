import { NgModule } from '@angular/core';
import { HomePage } from './pages/home/home.page';
import { PaymentRoutingModule } from './payment.routes';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [
    HomePage
  ],
  imports: [
    PaymentRoutingModule,
    MatButtonModule,
    MatTableModule
  ]
})
export class PaymentModule {
}
