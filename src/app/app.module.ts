import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app.routes';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { PaymentReducer } from './core/store/payment/payment.reducer';
import { PaymentEffects } from './core/store/payment/payment.effect';
import { EffectsModule } from '@ngrx/effects';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxMaskModule } from 'ngx-mask';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({
      payment: PaymentReducer
    }),
    EffectsModule.forRoot([
      PaymentEffects
    ]),
    NgxMaskModule.forRoot(),
    BrowserAnimationsModule,
    MatSnackBarModule
  ],
  providers: [
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
