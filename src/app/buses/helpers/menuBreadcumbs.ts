import { MenuItem } from 'primeng/api';
import { urlFront } from 'src/app/shared/routes/routeFront';

export const rutaRegresar = `${urlFront.bus.module}/${urlFront.bus.index}`;

export const itemsCrudBus: MenuItem[] = [
  { id: '1', label: 'Menu principal', routerLink: `${urlFront.index}` },
  {
    id: '2',
    label: 'Buses',
    routerLink: `${urlFront.bus.module}/${urlFront.bus.index}`,
  },
  {
    id: '3',
    label: 'Modulo crud',
    routerLink: `${urlFront.bus.module}/${urlFront.bus.register}`,
  },
];

export const itemsindexBus: MenuItem[] = [
  { id: '1', label: 'Menu principal', routerLink: `${urlFront.index}` },
  {
    id: '2',
    label: 'Buses',
    routerLink: `${urlFront.bus.module}/${urlFront.bus.index}`,
  },
];
