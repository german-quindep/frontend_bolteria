import { FormArray, FormControl } from '@angular/forms';

export interface BusModel {
  id: string | FormControl; 
  marca: string | FormControl;
  asientos: number | FormControl;
  asientosTotal: Array<number> | FormArray;
}

