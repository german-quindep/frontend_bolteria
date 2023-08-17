import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// COMPONENTS
import { IndexComponent } from '../components/index.component';
// RUTAS
import { urlFront } from 'src/app/shared/routes/routeFront';
import { CrudComponent } from '../components/crud/crud.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: urlFront.bus.index,
        component: IndexComponent,
      },
      {
        path: urlFront.bus.register,
        component: CrudComponent,
      },
      {
        path: '**',
        redirectTo: urlFront.bus.index,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BusRoutingModule {}
