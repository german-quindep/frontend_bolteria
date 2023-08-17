import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutsModule } from 'src/app/shared/layouts/module/layouts.module';
import { SectionMenuModule } from 'src/app/shared/components/section-menu/module/section-menu.module';
import { IndexComponent } from '../components/index.component';
import { IndexRoutingModule } from './index-routing.module';
import { ListHorarioComponent } from 'src/app/horario/public/list-horario/list-horario.component';

@NgModule({
  declarations: [IndexComponent],
  imports: [
    CommonModule,
    ListHorarioComponent,
    IndexRoutingModule,
    LayoutsModule,
    SectionMenuModule,
  ],
})
export class IndexModule {}
