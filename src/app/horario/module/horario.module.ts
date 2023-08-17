import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HorarioRoutingModule } from './horario-routing.module';
import { IndexComponent } from '../components/index.component';
import { FormComponent } from '../components/form/form.component';
import { LayoutsModule } from 'src/app/shared/layouts/module/layouts.module';
import { SectionMenuModule } from 'src/app/shared/components/section-menu/module/section-menu.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HorarioService } from '../service/horario.service';

@NgModule({
  declarations: [IndexComponent, FormComponent],
  imports: [
    CommonModule,
    HorarioRoutingModule,
    LayoutsModule,
    SectionMenuModule,
    ReactiveFormsModule,
  ],
  providers: [HorarioService],
})
export class HorarioModule {}
