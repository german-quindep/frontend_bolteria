import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuSteps } from './menuSteps.models';

@Component({
  selector: 'app-setps',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './setps.component.html',
  styleUrls: ['./setps.component.css'],
})
export class SetpsComponent implements OnInit {
  @Input() itemsMenu: MenuSteps[] = [];
  styleProgress: string = '';
  btnColor: string = '';
  ngOnInit(): void {}
  setStateSteps(value: MenuSteps) {
    this.itemsMenu.map((res) => {
      res.verify = false;
    });
    value.verify = true;
    this.styleProgress = value.styleProgress;
  }
}
