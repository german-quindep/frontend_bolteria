import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';
import { RegresarComponent } from '../regresar/regresar.component';
import { SectionsModuleComponent } from '../sections-module/sections-module.component';
import { BreadcumbsComponent } from '../../components/breadcumbs/breadcumbs.component';

@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    RegresarComponent,
    SectionsModuleComponent,
  ],
  imports: [CommonModule, BreadcumbsComponent],
  exports: [
    NavbarComponent,
    FooterComponent,
    RegresarComponent,
    SectionsModuleComponent,
  ],
})
export class LayoutsModule {}
