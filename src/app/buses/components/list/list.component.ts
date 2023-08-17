import { Component, Input, effect, inject } from '@angular/core';
import { BusesService } from '../../services/buses.service';
import { BusModel } from '../../models/Bus.models';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Table } from 'primeng/table';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent {
  @Input() visible = false;
  page = 0;
  items = 0;
  listBus: BusModel[] = [];
  searchList: string = '';
  private busService = inject(BusesService);
  constructor(
    private messageService: MessageService,
    private confirmationService: ConfirmationService
  ) {
    this.effectOnInit();
  }

  effectOnInit() {
    this.busService.obtenerData();
    effect(() => {
      this.visible = this.busService.signalModal();
      this.listBus = this.busService.listBuses().data;
    });
  }
  
  editBus(items: BusModel) {
    this.visible = true;
    this.busService.updateStateModal(this.visible);
    this.busService.updateForm(items);
  }

  deleteBus(items: BusModel) {
    this.confirmationService.confirm({
      message: `Estas seguro de eliminar el bus marca ${items.marca}`,
      header: 'Confirmar la eliminación',
      icon: 'pi pi-info-circle',
      accept: () => {
        this.busService.deleteBus(items).subscribe((res) => {
          this.messageService.add({
            severity: 'info',
            summary: 'Éxito',
            detail: res.message,
          });
          this.busService.obtenerData();
        });
      },
    });
  }

  onSearchModule(value: string) {
    this.searchList = value;
  }
  clear(table: Table) {
    table.clear();
  }
}
