import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CadastrobasicoPageRoutingModule } from './cadastrobasico-routing.module';

import { CadastrobasicoPage } from './cadastrobasico.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CadastrobasicoPageRoutingModule
  ],
  declarations: [CadastrobasicoPage]
})
export class CadastrobasicoPageModule {}
