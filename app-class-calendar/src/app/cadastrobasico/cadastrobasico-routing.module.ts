import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CadastrobasicoPage } from './cadastrobasico.page';

const routes: Routes = [
  {
    path: '',
    component: CadastrobasicoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CadastrobasicoPageRoutingModule {}
