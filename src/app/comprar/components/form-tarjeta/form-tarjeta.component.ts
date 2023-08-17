import { Component } from '@angular/core';

@Component({
  selector: 'app-form-tarjeta',
  templateUrl: './form-tarjeta.component.html',
  styleUrls: ['./form-tarjeta.component.css'],
})
export class FormTarjetaComponent {
  hability = false;
  constructor() {}

  onInputClick() {
    this.hability = true;
  }
  onInputDisable() {
    this.hability = false;
  }
}
