import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Biblioteca } from '../lista-bibliotecas/lista-bibliotecas.types';

@Component({
  selector: 'app-info-biblioteca',
  templateUrl: './info-biblioteca.page.html',
  styleUrls: ['./info-biblioteca.page.scss'],
})
export class InfoBibliotecaPage implements OnInit {
  biblioteca: Biblioteca | undefined;

  constructor(private route: ActivatedRoute, private router: Router, private http: HttpClient) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.loadBiblioteca(id);
    }
  }

  loadBiblioteca(id: string) {
    this.http.get<{ message: string, biblioteca: Biblioteca }>(`http://localhost:5001/api/bibliotecas/${id}`)
      .subscribe({
        next: (response) => {
          this.biblioteca = response.biblioteca;
        },
        error: (error) => {
          console.error('Error fetching biblioteca details', error);
        }
      });
  }

  goBack() {
    this.router.navigate(['/lista-bibliotecas']);
  }


  goToMain() {
    this.router.navigate(['/pagina-inicial']);
  }
}
