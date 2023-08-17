import { Component, effect, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HorarioService } from '../../service/horario.service';
import { ListHorarioFilter } from '../../model/ListHorarioFilter';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { DividerModule } from 'primeng/divider';
import { SharedBusModule } from 'src/app/shared/bus/module/sharedBus.module';
import { AsientosService } from 'src/app/shared/bus/service/asientos.service';
import { AsientosBusDispo } from 'src/app/shared/bus/model/asientosDispon.model';
import { Router } from '@angular/router';
import { urlFront } from 'src/app/shared/routes/routeFront';

@Component({
  selector: 'app-list-horario',
  standalone: true,
  imports: [
    CommonModule,
    DialogModule,
    ButtonModule,
    DividerModule,
    SharedBusModule,
  ],
  providers: [HorarioService],
  templateUrl: './list-horario.component.html',
  styleUrls: ['./list-horario.component.css'],
})
export class ListHorarioComponent {
  private horarioService = inject(HorarioService);
  private asientosDisponibles = inject(AsientosService);
  dateHoy = new Date();
  visible = false;
  listHorario: ListHorarioFilter[] = [];
  itemHorario: ListHorarioFilter = {
    destinoLlegada: '',
    destinoSalida: '',
    horarioLlegada: '',
    horarioSalida: '',
    id: '',
    idBus: '',
    marcaBus: '',
  };
  asientosAsignados: AsientosBusDispo = {
    asientosDisponibles: [],
    asientosOcupados: [],
  };

  constructor(private route: Router) {
    effect(() => {
      this.listHorario = this.horarioService.listHorario();
    });
    this.horarioService.getFilterHorario().subscribe((res) => {
      this.horarioService.setSignalFilter(res.data);
    });
  }

  showDialog(value: ListHorarioFilter): void {
    this.itemHorario = value;
    this.asientosDisponibles.verifyAsientos(value.id).subscribe((res) => {
      this.asientosAsignados = res.data;
    });
    this.visible = true;
  }

  irRuta(items: ListHorarioFilter) {
    const id = items.id;
    this.route.navigate([`${urlFront.comprar.module}/index/` + id]);
  }
}
