import { MenuSteps } from 'src/app/shared/components/setps/menuSteps.models';

export const itemMenu: MenuSteps[] = [
  {
    id: 1,
    label: 'Datos personales',
    classBtn:
      'position-absolute top-0 start-0 translate-middle btn btn-sm rounded-pill',
    classLbl: 'position-absolute top-0 mt-5 start-0 translate-middle mx-2',
    verify: true,
    styleProgress: 'width:0%',
  },
  {
    id: 2,
    label: 'Tarjeta',
    classBtn:
      'position-absolute top-0 start-50 translate-middle btn btn-sm rounded-pill',
    classLbl: 'position-absolute top-0 mt-5 start-50 translate-middle',
    verify: false,
    styleProgress: 'width:50%',
  },
  {
    id: 3,
    label: 'Confirmar',
    classBtn:
      'position-absolute top-0 start-100 translate-middle btn btn-sm rounded-pill',
    classLbl: 'position-absolute top-0 mt-5 start-100 translate-middle',
    verify: false,
    styleProgress: 'width:100%',
  },
];
