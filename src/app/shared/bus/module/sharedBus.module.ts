import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DisenoBusComponent } from '../diseno-bus/diseno-bus.component';
import { AsientosService } from '../service/asientos.service';

@NgModule({
  declarations: [DisenoBusComponent],
  imports: [CommonModule],
  exports: [DisenoBusComponent],
  providers: [AsientosService],
})
export class SharedBusModule {}
