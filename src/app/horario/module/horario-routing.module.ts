import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// COMPONENTS
import { IndexComponent } from '../components/index.component';
import { FormComponent } from '../components/form/form.component';
// RUTAS
import { urlFront } from 'src/app/shared/routes/routeFront';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: urlFront.horario.index,
        component: IndexComponent,
      },
      {
        path: urlFront.horario.register,
        component: FormComponent,
      },
      {
        path: '**',
        redirectTo: urlFront.horario.index,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HorarioRoutingModule {}
