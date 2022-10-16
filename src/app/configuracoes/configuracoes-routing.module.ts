import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConfiguracoesPage } from './configuracoes.page';

const routes: Routes = [
  {
    path: 'configuracoes',
    component: ConfiguracoesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConfiguracoesPageRoutingModule {}
