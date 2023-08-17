import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { urlBack } from '../../routes/routeBack';
import { AsientosBusDispo } from '../model/asientosDispon.model';
import { ResponseData } from '../../response/ResponseData';

@Injectable()
export class AsientosService {
  constructor(private http: HttpClient) {}

  verifyAsientos(
    id: string
  ): Observable<ResponseData<AsientosBusDispo, String>> {
    const form = { horario_id: id };
    return this.http.post<ResponseData<AsientosBusDispo, String>>(
      `${urlBack.url}${urlBack.asientos.asientosList}`,
      form
    );
  }
}
