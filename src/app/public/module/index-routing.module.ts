import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// COMPONENTS
import { IndexComponent } from '../components/index.component';
// RUTAS
import { urlFront } from 'src/app/shared/routes/routeFront';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: IndexComponent,
      },
      {
        path: '**',
        redirectTo: urlFront.index,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IndexRoutingModule {}
