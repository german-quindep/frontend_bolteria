import { Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BusModel } from '../models/Bus.models';
import { ResponseData } from 'src/app/shared/response/ResponseData';
import { urlBack } from 'src/app/shared/routes/routeBack';
@Injectable()
export class BusesService {
  public listBuses = signal<ResponseData<Array<BusModel>, String>>({
    status: 0,
    data: [],
    message: '',
    error: '',
  });
  public formSubject = signal<BusModel>({
    id: '',
    marca: '',
    asientos: 0,
    asientosTotal: [],
  });
  //Señar para el modal de prime ng
  public signalModal = signal<boolean>(false);

  constructor(private http: HttpClient) {}
  //obtener toda la data
  async obtenerData() {
    try {
      const resp = await this.http.get<ResponseData<Array<BusModel>, String>>(
        `${urlBack.url}${urlBack.bus.module}${urlBack.bus.getAll}`
      );
      resp.subscribe((res: ResponseData<Array<BusModel>, String>) => {
        this.updateBusList(res);
      });
    } catch (error) {
      console.log(error);
    }
  }
  //save register
  guardarData(form: BusModel): Observable<ResponseData<BusModel, String>> {
    //guardar
    if (form.id) {
      return this.updateDataBus(form);
    } else {
      const result = this.http.post<ResponseData<BusModel, String>>(
        `${urlBack.url}${urlBack.bus.module}${urlBack.bus.create}`,
        form
      );
      this.obtenerData();
      return result;
    }
  }

  //actualizar formulario
  updateForm(value: BusModel) {
    this.formSubject.set(value);
  }
  //limpiar formulario
  limpiarForm() {
    this.formSubject.set({
      id: '',
      marca: '',
      asientos: 0,
      asientosTotal: [],
    });
  }
  //actualizar lista de bus
  updateBusList(value: ResponseData<Array<BusModel>, String>) {
    this.listBuses.set(value);
  }
  //actualizar estado del modal
  updateStateModal(value: boolean) {
    this.signalModal.set(value);
  }
  //actualizar datos
  updateDataBus(form: BusModel): Observable<ResponseData<BusModel, String>> {
    //actualizar
    const result = this.http.put<ResponseData<BusModel, String>>(
      `${urlBack.url}${urlBack.bus.module}${urlBack.bus.edit}`,
      form
    );
    //actualizar
    this.obtenerData();
    return result;
  }
  //eliminar datos
  deleteBus(form: BusModel): Observable<ResponseData<String, String>> {
    const result = this.http.delete<ResponseData<String, String>>(
      `${urlBack.url}${urlBack.bus.module}${urlBack.bus.delete}${form.id}`
    );
    this.obtenerData();
    return result;
  }
  //subir csv
  subirCsv(file: File): Observable<ResponseData<String, String>> {
    const formData = new FormData();
    formData.append('file', file);
    return this.http.post<ResponseData<String, String>>(
      `${urlBack.url}${urlBack.bus.module}${urlBack.bus.csv}`,
      formData
    );
  }
}
