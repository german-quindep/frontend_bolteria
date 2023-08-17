import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//Component
import { IndexComponent } from '../components/index.component';
import { SetpsComponent } from 'src/app/shared/components/setps/setps.component';
import { FormTarjetaComponent } from '../components/form-tarjeta/form-tarjeta.component';
import { ConfirmacionComponent } from '../components/confirmacion/confirmacion.component';
import { FormClienteComponent } from '../components/form-cliente/form-cliente.component';
//module
import { ComprarRoutingModule } from './comprar-routing.module';
import { LayoutsModule } from 'src/app/shared/layouts/module/layouts.module';
//Prime ng
import { AnimateModule } from 'primeng/animate';
import { DisenoTarjetaComponent } from '../components/diseno-tarjeta/diseno-tarjeta.component';
import { FacturaPresentacionComponent } from '../public/factura-presentacion/factura-presentacion.component';
import { SharedBusModule } from 'src/app/shared/bus/module/sharedBus.module';
@NgModule({
  declarations: [
    IndexComponent,
    FormTarjetaComponent,
    ConfirmacionComponent,
    FormClienteComponent,
    DisenoTarjetaComponent,
  ],
  imports: [
    CommonModule,
    ComprarRoutingModule,
    LayoutsModule,
    SetpsComponent,
    SharedBusModule,
    FacturaPresentacionComponent,
    AnimateModule,
  ],
})
export class ComprarModule {}
