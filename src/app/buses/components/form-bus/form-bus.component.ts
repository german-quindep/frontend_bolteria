import { Component, Input, OnInit, effect, inject } from '@angular/core';
import { BaseFormBus } from '../../models/FormBus';
import { BusesService } from '../../services/buses.service';
import { MessageService } from 'primeng/api';
@Component({
  selector: 'app-form-bus',
  templateUrl: './form-bus.component.html',
  styleUrls: ['./form-bus.component.css'],
})
export class FormBusComponent {
  @Input() visible = false;
  private busService = inject(BusesService);

  constructor(public formB: BaseFormBus, private messageServi: MessageService) {
    this.effectOnInit();
  }
  effectOnInit() {
    effect(() => {
      this.busService.signalModal();
      this.formB.formBus.patchValue({ ...this.busService.formSubject() });
      this.formB.addAsientoTotal(
        this.busService.formSubject().asientos as number
      );
    });
  }
  asientosAsignados = [1, 2, 7, 8, 9];

  sumarAsientos() {
    const numeroAsiento = this.formB.formBus.value.asientos as number;
    if (numeroAsiento <= 40) {
      this.formB.addAsientoTotal(numeroAsiento);
    } else {
      console.log('error');
    }
  }

  cerrarModal() {
    this.visible = false;
    this.busService.updateStateModal(this.visible);
  }

  guardarOrEdit(): void {
    this.busService.guardarData(this.formB.busValue).subscribe(
      (res) => {
        this.messageServi.add({
          severity: 'success',
          summary: 'Exito',
          detail: res.message,
        });
        this.busService.obtenerData();
        this.busService.limpiarForm();
        this.cerrarModal();
      },
      (err) => {
        this.messageServi.add({
          severity: 'error',
          summary: 'Error',
          detail: 'Hubo un error al registrar',
        });
      }
    );
  }
}
