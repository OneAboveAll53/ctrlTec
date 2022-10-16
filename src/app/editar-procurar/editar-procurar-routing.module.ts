import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditarProcurarPage } from './editar-procurar.page';

const routes: Routes = [
  {
    path: 'editarProcurar',
    component: EditarProcurarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditarProcurarPageRoutingModule {}
