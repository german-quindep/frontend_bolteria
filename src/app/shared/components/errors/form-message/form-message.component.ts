import { Component, Host, Input, OnInit } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { errosDictonary } from '../models/errosDictonary';
import { FormErrorComponent } from '../form-error/form-error.component';

@Component({
  selector: 'app-form-message',
  templateUrl: './form-message.component.html',
  styleUrls: ['./form-message.component.css'],
})
export class FormMessageComponent implements OnInit {
  @Input('forErrorCode') errorCode!: string;
  @Input() customMsg: string | null = null;
  control!: AbstractControl | null;

  get errorMsg(): string {
    if (this.customMsg) {
      return this.customMsg;
    }
    if (errosDictonary[this.errorCode] !== undefined) {
      return errosDictonary[this.errorCode];
    }
    return `Hay un error en el campo. (code: ${this.errorCode})`;
  }

  constructor(@Host() private errorContainer: FormErrorComponent) {}

  ngOnInit(): void {
    this.control = this.errorContainer.control;
  }
}
