import { Component, Input } from '@angular/core';
import { SectionMenuModel } from './models/SectionMenu.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-section-menu',
  templateUrl: './section-menu.component.html',
  styleUrls: ['./section-menu.component.css'],
})
export class SectionMenuComponent {
  @Input() listSection: Array<SectionMenuModel> = [];
  searchValue: string = '';
  constructor(private router: Router) {}

  irRuta(ruta: string): void {
    this.router.navigateByUrl(ruta);
  }
  onSearchModule(value: string): void {
    this.searchValue = value;
  }
}
