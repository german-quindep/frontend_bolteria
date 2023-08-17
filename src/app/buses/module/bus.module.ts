import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
//COMPONENTS
import { IndexComponent } from '../components/index.component';
import { FormBusComponent } from '../components/form-bus/form-bus.component';
// MODELS
import { BaseFormBus } from '../models/FormBus';
// ROUTING BUS
import { BusRoutingModule } from './bus-routing.module';
//SHARED
import { SharedBusModule } from 'src/app/shared/bus/module/sharedBus.module';
import { LayoutsModule } from 'src/app/shared/layouts/module/layouts.module';
import { SectionMenuModule } from 'src/app/shared/components/section-menu/module/section-menu.module';
import { ErrorsFormModule } from 'src/app/shared/components/errors/module/errors-form.module';
//Module Bus
import { BusesService } from '../services/buses.service';
import { ListComponent } from '../components/list/list.component';
import { CrudComponent } from '../components/crud/crud.component';
//Prime ng
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DividerModule } from 'primeng/divider';
import { FileUploadModule } from 'primeng/fileupload';
import { SearchBusPipe } from '../pipe/search-bus.pipe';
import { BreadcumbsComponent } from 'src/app/shared/components/breadcumbs/breadcumbs.component';
@NgModule({
  declarations: [
    IndexComponent,
    FormBusComponent,
    ListComponent,
    CrudComponent,
    SearchBusPipe,
  ],
  imports: [
    CommonModule,
    BusRoutingModule,
    ReactiveFormsModule,
    ToastModule,
    FileUploadModule,
    BreadcumbsComponent,
    LayoutsModule,
    DividerModule,
    ConfirmDialogModule,
    SectionMenuModule,
    SharedBusModule,
    TableModule,
    DialogModule,
    ButtonModule,
    ErrorsFormModule,
  ],
  providers: [BaseFormBus, BusesService, MessageService, ConfirmationService],
})
export class BusModule {}
