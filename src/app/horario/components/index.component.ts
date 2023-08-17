import { Component } from '@angular/core';
import { listMenu, itemNav } from '../model/Menu';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css'],
})
export class IndexComponent {
  listItem = listMenu;
  listNav = itemNav;
}
