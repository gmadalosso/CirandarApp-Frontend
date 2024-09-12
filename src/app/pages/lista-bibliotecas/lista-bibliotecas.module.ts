import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListaBibliotecasPageRoutingModule } from './lista-bibliotecas-routing.module';

import { ListaBibliotecasPage } from './lista-bibliotecas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListaBibliotecasPageRoutingModule
  ],
  declarations: [ListaBibliotecasPage]
})
export class ListaBibliotecasPageModule {}
