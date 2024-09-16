import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CriarBibliotecaPageRoutingModule } from './criar-biblioteca-routing.module';

import { CriarBibliotecaPage } from './criar-biblioteca.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CriarBibliotecaPageRoutingModule
  ],
  declarations: [CriarBibliotecaPage]
})
export class CriarBibliotecaPageModule {}
