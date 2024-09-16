import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CriarBibliotecaPage } from './criar-biblioteca.page';

const routes: Routes = [
  {
    path: '',
    component: CriarBibliotecaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CriarBibliotecaPageRoutingModule {}
