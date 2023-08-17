import { Injectable } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';
import { BusModel } from './Bus.models';
import { pattern } from 'src/app/shared/validators/expresionRegular';

@Injectable()
export class BaseFormBus {
  constructor(private formB: FormBuilder) {}
  /* Formulario reactivo estricto */
  formBus = this.formB.group<BusModel>({
    id: new FormControl<string>(''),
    marca: new FormControl<string>('', [
      Validators.required,
      Validators.pattern(pattern.notSpecial),
      Validators.minLength(5),
      Validators.maxLength(30),
    ]),
    asientos: new FormControl<number>(0, [
      Validators.required,
      Validators.pattern(pattern.number),
      Validators.min(10),
      Validators.max(40),
    ]),
    asientosTotal: new FormArray<FormControl<number>>([], Validators.required),
  });

  get busValue(): BusModel {
    return this.formBus.value as BusModel;
  }

  get getAsientosTotal(): FormArray {
    return this.formBus.get('asientosTotal') as FormArray;
  }
  /* Agregar asientos en el array  */
  addAsientoTotal(asientoNumber: number) {
    this.getAsientosTotal.clear();
    for (let i = 1; i <= asientoNumber; i++) {
      this.getAsientosTotal.push(new FormControl<number>(i));
    }
  }
}
