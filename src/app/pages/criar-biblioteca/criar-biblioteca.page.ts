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
  biblioteca: any = {}; // Stores biblioteca details
  isEditMode: boolean = false;
  apiUrl = environment.apiUrl;

  constructor(
    private router: Router,
    private http: HttpClient
  ) {}

  ngOnInit() {
    this.resetForm(); // Reset form fields on initialization

    // Check if we're in edit mode by getting state from navigation
    const navigation = this.router.getCurrentNavigation();
    if (navigation && navigation.extras.state && navigation.extras.state['biblioteca']) {
      this.biblioteca = navigation.extras.state['biblioteca'];
      this.isEditMode = true; // We're in edit mode
    } else {
      this.isEditMode = false; // We're in create mode, so reset the form
      this.resetForm(); // Clear any pre-filled values
    }
  }

  // Function to reset form fields
  resetForm() {
    this.biblioteca = {
      nome: '',
      endereco: '',
      contato: '',
      horario: ''
    };
  }

  // Function to create or update biblioteca
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
      // Create a new biblioteca
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
