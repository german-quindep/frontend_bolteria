import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadcrumbItemClickEvent, BreadcrumbModule } from 'primeng/breadcrumb';
import { MenuItem } from 'primeng/api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-breadcumbs',
  standalone: true,
  imports: [CommonModule, BreadcrumbModule],
  templateUrl: './breadcumbs.component.html',
  styleUrls: ['./breadcumbs.component.css'],
})
export class BreadcumbsComponent {
  @Input() listItems: MenuItem[] = [];
  home: MenuItem | undefined;
  constructor(private route: Router) {
    this.home = { icon: 'pi pi-home', routerLink: '/' };
  }
  itemClick(event: BreadcrumbItemClickEvent) {
    this.route.navigateByUrl(event.item.routerLink);
  }
}
