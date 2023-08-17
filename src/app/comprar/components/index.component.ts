import { Component } from '@angular/core';
import { itemsindexBus, rutaRegresar } from '../helpers/menuBreadCumbs';
import { itemMenu } from '../models/StepMenu.models';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css'],
})
export class IndexComponent {
  itemMenu = itemMenu;
  listBreadcumb = itemsindexBus;
  regresar = rutaRegresar;
  constructor() {}
}
