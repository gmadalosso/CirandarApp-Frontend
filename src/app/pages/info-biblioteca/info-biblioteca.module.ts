import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InfoBibliotecaPageRoutingModule } from './info-biblioteca-routing.module';

import { InfoBibliotecaPage } from './info-biblioteca.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InfoBibliotecaPageRoutingModule
  ],
  declarations: [InfoBibliotecaPage]
})
export class InfoBibliotecaPageModule {}
