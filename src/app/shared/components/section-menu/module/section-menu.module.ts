import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionMenuComponent } from '../section-menu.component';
import { SearchPipe } from '../pipe/search.pipe';

@NgModule({
  declarations: [SectionMenuComponent, SearchPipe],
  imports: [CommonModule],
  exports: [SectionMenuComponent],
})
export class SectionMenuModule {}
