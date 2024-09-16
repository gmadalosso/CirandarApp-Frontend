import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditarBibliotecaPage } from './editar-biblioteca.page';

const routes: Routes = [
  {
    path: '',
    component: EditarBibliotecaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditarBibliotecaPageRoutingModule {}
