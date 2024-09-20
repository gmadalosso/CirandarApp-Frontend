import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-criar-biblioteca',
  templateUrl: './criar-biblioteca.page.html',
  styleUrls: ['./criar-biblioteca.page.scss'],
})
export class CriarBibliotecaPage implements OnInit {
  biblioteca: any = {};
  isEditMode: boolean = false;
  apiUrl = environment.apiUrl;

  constructor(
    private router: Router,
    private http: HttpClient
  ) {}

  ngOnInit() {
    this.resetForm();

    const navigation = this.router.getCurrentNavigation();
    if (navigation && navigation.extras.state && navigation.extras.state['biblioteca']) {
      this.biblioteca = navigation.extras.state['biblioteca'];
      this.isEditMode = true;
    } else {
      this.isEditMode = false;
      this.resetForm();
    }
  }

  resetForm() {
    this.biblioteca = {
      nome: '',
      endereco: '',
      contato: '',
      horario: ''
    };
  }

  saveBiblioteca() {
    if (this.isEditMode) {
      this.http.put(`${this.apiUrl}/bibliotecas/${this.biblioteca._id}`, {
        nome: this.biblioteca.nome,
        endereco: this.biblioteca.endereco,
        contato: this.biblioteca.contato,
        horario: this.biblioteca.horario
      }, { withCredentials: true }).subscribe({
        next: (response) => {
          console.log('Biblioteca atualizada com sucesso', response);
          this.router.navigate(['/admin-dashboard']);
        },
        error: (error) => {
          console.error('Erro ao atualizar biblioteca', error);
        }
      });
    } else {
      this.http.post(`${this.apiUrl}/bibliotecas`, this.biblioteca,
        { withCredentials: true })
        .subscribe({
          next: () => {
            console.log('Biblioteca criada com sucesso');
            this.router.navigate(['/admin-dashboard']);
          },
          error: (error) => {
            console.error('Erro ao criar biblioteca', error);
          }
        });
    }
  }
}
