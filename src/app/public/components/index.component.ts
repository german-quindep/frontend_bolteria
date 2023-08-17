import { Component } from '@angular/core';
import { ListIndex } from '../models/Index.model';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css'],
})
export class IndexComponent {
  listMenu = ListIndex;
}
