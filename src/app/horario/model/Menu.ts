import { NavbarModel } from 'src/app/shared/layouts/navbar/model/Navbar.model';
import { urlFront } from 'src/app/shared/routes/routeFront';
import { SectionMenuModel } from 'src/app/shared/components/section-menu/models/SectionMenu.model';

export const listMenu: Array<SectionMenuModel> = [
  {
    id: 1,
    img: 'assets/asientos',
    description:
      'En este modulo puedes realizar los registros, ediciones y borrado de los horarios de los buses',
    link: `${urlFront.horario.module}/${urlFront.horario.register}`,
    title: 'Modulo Crud',
  },
  {
    id: 2,
    img: 'assets/asientos',
    description: 'ejemplo de la data',
    link: `${urlFront.horario.module}/${urlFront.horario.index}`,
    title: 'Modulo de Ejemplo',
  },
];
export const itemNav: Array<NavbarModel> = [
  {
    name: 'Crud',
    url: `${urlFront.horario.module}/${urlFront.horario.register}`,
  },
  {
    name: 'prueba',
    url: `${urlFront.horario.module}/${urlFront.horario.index}`,
  },
];
