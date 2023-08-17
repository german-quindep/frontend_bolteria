import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-regresar',
  templateUrl: './regresar.component.html',
  styleUrls: ['./regresar.component.css'],
})
export class RegresarComponent {
  @Input() regresar: string = '';
  constructor(private router: Router) {}
  irRuta(ruta: string): void {
    this.router.navigateByUrl(ruta);
  }
}
