import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { PopoverController } from '@ionic/angular';
import { PopoverMenuComponent } from 'src/app/components/popover-menu/popover-menu.component';

@Component({
  selector: 'app-pagina-inicial',
  templateUrl: './pagina-inicial.page.html',
  styleUrls: ['./pagina-inicial.page.scss'],
})
export class PaginaInicialPage {

  constructor(private router: Router, private http: HttpClient, private popoverController: PopoverController) {}

  goToBibliotecas() {
    this.router.navigate(['/lista-bibliotecas']);
  }

  async presentPopover(ev: any) {
    const popover = await this.popoverController.create({
      component: PopoverMenuComponent,
      event: ev,
      translucent: true,
    });
    await popover.present();
  }

  goToMain() {
    this.router.navigate(['/pagina-inicial']);
  }
}
