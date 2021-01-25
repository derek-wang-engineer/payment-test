import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { CreateCard } from '../../../core/store/payment/payment.action';
import { State } from '../../../core/store/state';
import * as moment from 'moment';

export const FORMAT_DATE: string = 'YYYY-MM-DD';
@Component({
  selector: 'app-payment-comp-card-register',
  templateUrl: './card-register.component.html',
  styleUrls: [
    './card-register.component.scss'
  ]
})
export class CardRegisterComponent implements OnInit {
  registerForm: FormGroup;

  constructor(
    private _formBuilder: FormBuilder,
    private _store: Store<State>,
    public dialogRef: MatDialogRef<CardRegisterComponent>
  ) {
    this.registerForm = this._formBuilder.group({
      cardNumber: [ '', Validators.required ],
      cardHolder: [ '', Validators.required ],
      expirationDate: [ '', [
        Validators.required,
        DateValidator.dateMinimum(moment().format(FORMAT_DATE))
      ] ],
      securityCode: [ '' ],
      amount: [ 0, [
        Validators.required,
        Validators.min(1)
      ] ]
    });
  }

  ngOnInit(): void {
  }

  submitForm() {
    if (!this.registerForm.valid) {
      return;
    }
    this._store.dispatch(new CreateCard(this.registerForm.value));
    this.dialogRef.close();
  }

  cancelRegister() {
    this.dialogRef.close();
  }
}

export class DateValidator {
  static dateMinimum(date: string): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      if (control.value == null) {
        return null;
      }

      const controlDate = moment(control.value, FORMAT_DATE);

      if (!controlDate.isValid()) {
        return null;
      }

      const validationDate = moment(date);

      return controlDate.isAfter(validationDate) ? null : {
        'date-minimum': {
          'date-minimum': validationDate.format(FORMAT_DATE),
          'actual': controlDate.format(FORMAT_DATE)
        }
      };
    };
  }
}
