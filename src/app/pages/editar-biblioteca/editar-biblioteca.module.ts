import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditarBibliotecaPageRoutingModule } from './editar-biblioteca-routing.module';

import { EditarBibliotecaPage } from './editar-biblioteca.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditarBibliotecaPageRoutingModule
  ],
  declarations: [EditarBibliotecaPage]
})
export class EditarBibliotecaPageModule {}
