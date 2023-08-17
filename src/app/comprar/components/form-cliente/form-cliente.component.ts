import { Component, inject } from '@angular/core';
import { AsientosBusDispo } from 'src/app/shared/bus/model/asientosDispon.model';
import { AsientosService } from 'src/app/shared/bus/service/asientos.service';

@Component({
  selector: 'app-form-cliente',
  templateUrl: './form-cliente.component.html',
  styleUrls: ['./form-cliente.component.css'],
})
export class FormClienteComponent {
  asientosAsignados: AsientosBusDispo = {
    asientosDisponibles: [],
    asientosOcupados: [],
  };
  private asientosServi = inject(AsientosService);

  constructor() {
    const id = 'f9b02771-67ed-41b5-ae39-2ec1bf66c6e1';
    this.asientosServi.verifyAsientos(id).subscribe((res) => {
      this.asientosAsignados = res.data;
    });
  }
}
