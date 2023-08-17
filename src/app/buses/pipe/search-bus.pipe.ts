import { Pipe, PipeTransform } from '@angular/core';
import { BusModel } from '../models/Bus.models';

@Pipe({
  name: 'searchBus',
})
export class SearchBusPipe implements PipeTransform {
  transform(value: BusModel[], search: string): BusModel[] {
    if (!Array.isArray(value)) return value;
    if (!search || search == '') return value;
    const resultData = value.filter((res) => {
      const marca = res.marca.toString();
      const asientos = res.asientos.toString();
      return (
        marca.toLowerCase().includes(search.toLowerCase()) ||
        asientos.includes(search)
      );
    });
    console.log(resultData, search);
    return resultData;
  }
}
