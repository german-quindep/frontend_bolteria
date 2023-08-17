import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sections-module',
  templateUrl: './sections-module.component.html',
  styleUrls: ['./sections-module.component.css'],
})
export class SectionsModuleComponent {
  @Input() listBreadCumb: any = [];
  @Input() regresar: string = '';
  @Input() nameModule: string = '';
  @Input() classIcon: string = '';
}
