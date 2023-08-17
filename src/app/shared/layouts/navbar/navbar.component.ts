import { Component, Input } from '@angular/core';
import { NavbarModel } from './model/Navbar.model';
import { urlFront } from '../../routes/routeFront';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  @Input() listItem: Array<NavbarModel> = [
    {
      name: 'inicio',
      url: `${urlFront.index}`,
    },
    {
      name: 'buses',
      url: `${urlFront.bus.module}/${urlFront.bus.index}`,
    },
    {
      name: 'horario',
      url: `${urlFront.horario.module}/${urlFront.horario.index}`,
    },
  ];
  constructor(private router: Router) {}
  irRuta(url: string): void {
    this.router.navigateByUrl(url);
  }
}
