import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PopoverController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-popover-menu',
  template: `
    <ion-list>
      <ion-item button (click)="logout()">
        <ion-icon name="log-out-outline" slot="start"></ion-icon>
        <ion-label>Sair</ion-label>
      </ion-item>
    </ion-list>
  `,
})
export class PopoverMenuComponent {

  constructor(private router: Router, private http: HttpClient, private popoverCtrl: PopoverController) {}

  logout() {
    this.http.post('http://localhost:5001/logout', {}).subscribe({
      next: () => {
        localStorage.removeItem('isLoggedIn');
        localStorage.removeItem('userRole');
        this.popoverCtrl.dismiss();
        this.router.navigate(['/inicio']);
      },
      error: (error) => {
        console.error('Falha no logout', error);
      }
    });
  }
}
