import { Component } from '@angular/core';
import { itemNav } from '../../model/Menu';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent {
  listNav = itemNav;
}
