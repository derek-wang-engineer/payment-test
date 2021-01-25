import { NgModule } from '@angular/core';
import { HomePage } from './pages/home/home.page';
import { PaymentRoutingModule } from './payment.routes';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';
import { CardRegisterComponent } from './components/card-register/card-register.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxMaskModule } from 'ngx-mask';

@NgModule({
  declarations: [
    HomePage,
    CardRegisterComponent
  ],
  imports: [
    PaymentRoutingModule,

    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,

    FormsModule,
    ReactiveFormsModule,
    NgxMaskModule.forChild()
  ]
})
export class PaymentModule {
}
