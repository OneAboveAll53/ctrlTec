import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditarProcurarPageRoutingModule } from './editar-procurar-routing.module';

import { EditarProcurarPage } from './editar-procurar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditarProcurarPageRoutingModule
  ],
  declarations: [EditarProcurarPage]
})
export class EditarProcurarPageModule {}
