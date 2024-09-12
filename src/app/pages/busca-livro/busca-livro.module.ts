import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BuscaLivroPageRoutingModule } from './busca-livro-routing.module';

import { BuscaLivroPage } from './busca-livro.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BuscaLivroPageRoutingModule
  ],
  declarations: [BuscaLivroPage]
})
export class BuscaLivroPageModule {}
