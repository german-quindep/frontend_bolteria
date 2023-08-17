import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { urlFront } from './shared/routes/routeFront';

const routes: Routes = [
  {
    path: urlFront.index,
    loadChildren: () =>
      import('./public/module/index.module').then((m) => m.IndexModule),
  },
  {
    path: urlFront.bus.module,
    loadChildren: () =>
      import('./buses/module/bus.module').then((m) => m.BusModule),
  },
  {
    path: urlFront.horario.module,
    loadChildren: () =>
      import('./horario/module/horario.module').then((m) => m.HorarioModule),
  },
  {
    path: urlFront.comprar.module,
    loadChildren: () =>
      import('./comprar/module/comprar.module').then((m) => m.ComprarModule),
  },
  {
    path: '**',
    redirectTo: urlFront.index,
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
