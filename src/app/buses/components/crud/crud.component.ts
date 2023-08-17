import { Component, inject } from '@angular/core';
import { itemNav } from '../../models/Menu';
import { BusesService } from '../../services/buses.service';
import { MessageService } from 'primeng/api';
import { FileUploadHandlerEvent } from 'primeng/fileupload';
import { itemsCrudBus, rutaRegresar } from '../../helpers/menuBreadcumbs';
interface UploadEvent {
  originalEvent: Event;
  files: File[];
}
@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css'],
})
export class CrudComponent {
  listNav = itemNav;
  listBreadCumb = itemsCrudBus;
  regresar = rutaRegresar;
  visible = false;

  private busService = inject(BusesService);
  constructor(private messageServi: MessageService) {}

  limpiarFormulario() {
    this.busService.limpiarForm();
  }

  showDialog() {
    this.visible = true;
    this.busService.updateStateModal(this.visible);
    this.busService.limpiarForm();
  }
  //Subir archivo csv
  subirCsv(event: FileUploadHandlerEvent) {
    const file = event.files[0];
    this.busService.subirCsv(file).subscribe((res) => {
      this.messageServi.add({
        severity: 'info',
        summary: `${res.data}`,
        detail: res.message,
      });
      this.busService.obtenerData();
    });
  }
}
