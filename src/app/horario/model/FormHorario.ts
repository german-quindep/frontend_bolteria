import { Injectable } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

interface FilterHorario {
  fechaHoy: Date | FormControl;
}
@Injectable()
export class FilterFormHorario {
  fechaInicial: Date = new Date();
  constructor(private formB: FormBuilder) {}
  //Formulario reactivo estricto
  filterHorario = this.formB.group<FilterHorario>({
    fechaHoy: new FormControl<Date>(this.fechaInicial, [Validators.required]),
  });

  get filterHorarioValue(): FilterHorario {
    return this.filterHorario.value as FilterHorario;
  }
}
