import { urlFront } from 'src/app/shared/routes/routeFront';
import { SectionMenuModel } from 'src/app/shared/components/section-menu/models/SectionMenu.model';

export const ListIndex: Array<SectionMenuModel> = [
  {
    id: 1,
    img: 'fa-solid fa-bus fa-2xl text-center text-primary mb-3',
    description:
      'En este modulo puedes realizar los registros, ediciones, darle de baja un bus',
    link: `${urlFront.bus.module}/${urlFront.bus.index}`,
    title: 'Modulo de buses',
  },
  {
    id: 2,
    img: 'fa-solid fa-calendar-days fa-2xl text-primary mb-3',
    description:
      'En este modulo puedes realizar los registros, ediciones, darle de un horario a un bus en especifico',
    link: `${urlFront.horario.module}/${urlFront.horario.index}`,
    title: 'Modulo de horarios',
  },
];
