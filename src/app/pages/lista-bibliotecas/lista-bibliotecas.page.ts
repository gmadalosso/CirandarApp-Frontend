import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Biblioteca } from './lista-bibliotecas.types';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-lista-bibliotecas',
  templateUrl: './lista-bibliotecas.page.html',
  styleUrls: ['./lista-bibliotecas.page.scss'],
})
export class ListaBibliotecasPage implements OnInit {

  constructor(private router: Router, private http: HttpClient) {}

  bibliotecas: Biblioteca[] = [];
  apiUrl = environment.apiUrl;

  ngOnInit() {
    this.loadBibliotecas();
  }

  loadBibliotecas() {
    this.http.get<{ message: string, bibliotecas: Biblioteca[] }>(`${this.apiUrl}/bibliotecas`, {
      withCredentials: true
    })
      .subscribe({
        next: (response) => {
          this.bibliotecas = response.bibliotecas;
        },
        error: (error) => {
          console.error('Error fetching bibliotecas', error);
        }
      });
  }

  goToBibliotecaInfo(bibliotecaId: string) {
    this.router.navigate(['/info-biblioteca', bibliotecaId]);
  }

  goBack() {
    this.router.navigate(['/pagina-inicial']);
  }

  goToMain() {
    this.router.navigate(['/pagina-inicial']);
  }
}
