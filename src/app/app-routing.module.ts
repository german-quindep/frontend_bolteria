import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { urlFront } from './shared/routes/routeFront';

const routes: Routes = [
  {
    path: urlFront.index,
    loadChildren: async () =>
      (await import('./public/module/index.module')).IndexModule,
  },
  {
    path: urlFront.bus.module,
    loadChildren: async () =>
      (await import('./buses/module/bus.module')).BusModule,
  },
  {
    path: urlFront.horario.module,
    loadChildren: async () =>
      (await import('./horario/module/horario.module')).HorarioModule,
  },
  {
    path: urlFront.comprar.module,
    loadChildren: async () =>
      (await import('./comprar/module/comprar.module')).ComprarModule,
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
