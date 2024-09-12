import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListaBibliotecasPage } from './lista-bibliotecas.page';

const routes: Routes = [
  {
    path: '',
    component: ListaBibliotecasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListaBibliotecasPageRoutingModule {}
