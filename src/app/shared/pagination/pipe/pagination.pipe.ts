import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pagination',
})
export class PaginationPipe<T> implements PipeTransform {

  transform(value: T[], page: number = 0): T[] {

    if (value != null) return value.slice(page, page + 1);

    return [];
  }
}
