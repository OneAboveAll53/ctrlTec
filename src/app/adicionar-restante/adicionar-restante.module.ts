import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdicionarRestantePageRoutingModule } from './adicionar-restante-routing.module';

import { AdicionarRestantePage } from './adicionar-restante.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdicionarRestantePageRoutingModule
  ],
  declarations: [AdicionarRestantePage]
})
export class AdicionarRestantePageModule {}
