import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { Observable } from 'rxjs';
import { ResponseData } from 'src/app/shared/response/ResponseData';
import { ListHorarioFilter } from '../model/ListHorarioFilter';
import { urlBack } from 'src/app/shared/routes/routeBack';

@Injectable()
export class HorarioService {
  public listHorario = signal<ListHorarioFilter[]>([]);
  constructor(private http: HttpClient) {}

  getFilterHorario(): Observable<ResponseData<ListHorarioFilter[], String>> {
    const fecha = { fechaHoy: '2023-07-06' };
    const result = this.http.post<ResponseData<ListHorarioFilter[], String>>(
      `${urlBack.url}${urlBack.horario.module}${urlBack.horario.filterHorario}`,
      fecha
    );
    return result;
  }

  setSignalFilter(value: ListHorarioFilter[]) {
    this.listHorario.set(value);
  }
}
