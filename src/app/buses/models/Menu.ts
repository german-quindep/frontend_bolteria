import { urlFront } from 'src/app/shared/routes/routeFront';
import { SectionMenuModel } from 'src/app/shared/components/section-menu/models/SectionMenu.model';
import { NavbarModel } from 'src/app/shared/layouts/navbar/model/Navbar.model';

export const listMenu: Array<SectionMenuModel> = [
  {
    id: 1,
    img: 'fa-solid fa-laptop-file fa-2xl text-primary',
    description:
      'En este modulo puedes realizar los registros, ediciones y borrado de buses',
    link: `${urlFront.bus.module}/${urlFront.bus.register}`,
    title: 'Modulo Crud',
  },
  {
    id: 2,
    img: 'fa-solid fa-circle-info fa-2xl text-primary',
    description:
      'ejemplo de la data para realizar otra tipo de cosa en los modulos de buses',
    link: `${urlFront.bus.module}/${urlFront.bus.index}`,
    title: 'Modulo de Ejemplo',
  },
];

export const itemNav: Array<NavbarModel> = [
  {
    name: 'Crud',
    url: `${urlFront.bus.module}/${urlFront.bus.register}`,
  },
  {
    name: 'prueba',
    url: `${urlFront.bus.module}/${urlFront.bus.index}`,
  },
];
