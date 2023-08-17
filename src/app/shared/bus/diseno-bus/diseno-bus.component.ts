import { Component, Input } from '@angular/core';
import { AsientosBusDispo } from '../model/asientosDispon.model';

@Component({
  selector: 'app-diseno-bus',
  templateUrl: './diseno-bus.component.html',
  styleUrls: ['./diseno-bus.component.css'],
})
export class DisenoBusComponent {
  @Input() formBus: any;
  @Input() asientosAsignados: Array<number> = [];
  @Input() asientoDispon: AsientosBusDispo = {
    asientosDisponibles: [],
    asientosOcupados: [],
  };
  @Input() formOrCash: boolean = false;

  stateBusAsiento(value: number): boolean {
    return this.asientoDispon.asientosOcupados.includes(value);
  }
}
