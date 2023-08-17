import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { PaginationService } from '../service/pagination.service';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css'],
})
export class PaginationComponent implements OnChanges {
  page = 0;
  @Input() items: number | undefined = 0;
  itemsData: Array<number> = [];
  constructor(private pagiService: PaginationService) {}

  ngOnChanges(changes: SimpleChanges): void {
    this.generarItems();
  }

  generarItems(): void {
    if (this.items) {
      for (let i = 0; i < this.items; i++) {
        this.itemsData.push(i + 1);
      }
    }
  }

  nextPage() {
    this.pagiService.updatedPage((this.page += 1));
  }

  prevPage() {
    if (this.page > 0) this.pagiService.updatedPage((this.page -= 1));
  }
  paginate(index: number) {}
}
