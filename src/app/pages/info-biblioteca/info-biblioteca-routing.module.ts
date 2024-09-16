import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InfoBibliotecaPage } from './info-biblioteca.page';

const routes: Routes = [
  {
    path: '',
    component: InfoBibliotecaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InfoBibliotecaPageRoutingModule {}
