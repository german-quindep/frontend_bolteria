import { Component } from '@angular/core';
import { listSocialMedia } from './listItemsFooter';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent {
  listItems = listSocialMedia;
}
