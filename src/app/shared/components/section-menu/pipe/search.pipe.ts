import { Pipe, PipeTransform } from '@angular/core';
import { SectionMenuModel } from '../models/SectionMenu.model';

@Pipe({
  name: 'search',
})
export class SearchPipe implements PipeTransform {
  transform(value: SectionMenuModel[], search: string): SectionMenuModel[] {
    if (!Array.isArray(value)) return value;
    if (!search || search == '') return value;
    const resultData = value.filter((res) => {
      return res.title.toLowerCase().includes(search.toLowerCase());
    });
    return resultData;
  }
}
