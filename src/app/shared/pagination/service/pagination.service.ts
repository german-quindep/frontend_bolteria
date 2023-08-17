import { Injectable, signal } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PaginationService {
  
  private page = new BehaviorSubject(0);
  page$ = this.page.asObservable();

  constructor() {}

  updatedPage(value: number) {
    this.page.next(value);
  }
}
