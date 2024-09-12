import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BuscaLivroPage } from './busca-livro.page';

const routes: Routes = [
  {
    path: '',
    component: BuscaLivroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BuscaLivroPageRoutingModule {}
