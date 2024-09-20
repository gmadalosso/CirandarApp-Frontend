import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AlertController } from '@ionic/angular';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.page.html',
  styleUrls: ['./admin-dashboard.page.scss'],
})
export class AdminDashboardPage {
  bibliotecas: any[] = [];
  apiUrl = environment.apiUrl;

  constructor(
    private router: Router,
    private http: HttpClient,
    private alertController: AlertController
  ) {}

  ionViewWillEnter() {
    this.loadBibliotecas();
  }

  loadBibliotecas() {
    this.http.get<any>(`${this.apiUrl}/bibliotecas`).subscribe({
      next: (response) => {
        this.bibliotecas = response.bibliotecas;
      },
      error: (error) => {
        console.error('Error fetching bibliotecas', error);
      }
    });
  }

  async confirmDelete(bibliotecaId: string) {
    const alert = await this.alertController.create({
      header: 'Confirmação',
      message: 'Tem certeza de que deseja remover esta biblioteca?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            console.log('Cancel deletion');
          }
        },
        {
          text: 'Deletar',
          handler: () => {
            this.deleteBiblioteca(bibliotecaId);
          }
        }
      ]
    });

    await alert.present();
  }

  deleteBiblioteca(bibliotecaId: string) {
    this.http.delete(`${this.apiUrl}/bibliotecas/${bibliotecaId}`,
      { withCredentials: true }).subscribe({
      next: () => {
        console.log('Biblioteca removida com sucesso');
        this.loadBibliotecas();
      },
      error: (error) => {
        console.error('Erro ao remover biblioteca', error);
      }
    });
  }

  cadastrarBiblioteca() {
    this.router.navigate(['/criar-biblioteca']);
  }

  reloadBibliotecas() {
    this.loadBibliotecas();
  }

  logout() {
    this.http.post(`${this.apiUrl}/logout`, {
      withCredentials: true
    }).subscribe({
      next: () => {
        this.router.navigate(['/inicio']);
      },
      error: (error) => {
        console.error('Erro ao fazer logout', error);
      }
    });
  }

  editBiblioteca(biblioteca: any) {
    this.router.navigate(['/criar-biblioteca'], { state: { biblioteca } });
  }

}
