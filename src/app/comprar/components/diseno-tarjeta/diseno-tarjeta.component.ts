import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-diseno-tarjeta',
  templateUrl: './diseno-tarjeta.component.html',
  styleUrls: ['./diseno-tarjeta.component.css'],
})
export class DisenoTarjetaComponent {
  @Input() hability: boolean = false;
}
