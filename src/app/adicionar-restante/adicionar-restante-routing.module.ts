import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdicionarRestantePage } from './adicionar-restante.page';

const routes: Routes = [
  {
    path: 'adicionarRestante',
    component: AdicionarRestantePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdicionarRestantePageRoutingModule {}
