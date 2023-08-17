import { Component } from '@angular/core';
import { listMenu, itemNav } from '../models/Menu';
import { itemsindexBus, rutaRegresar } from '../helpers/menuBreadcumbs';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css'],
})
export class IndexComponent {
  listItems = listMenu;
  listNav = itemNav;
  listBreadcumb = itemsindexBus;
  regresar = rutaRegresar;
}
