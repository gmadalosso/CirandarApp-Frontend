import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.page.html',
  styleUrls: ['./admin-dashboard.page.scss'],
})
export class AdminDashboardPage implements OnInit {
  bibliotecas: any[] = [];

  constructor(private router: Router, private http: HttpClient) {}

  ngOnInit() {
    this.loadBibliotecas();
  }

  loadBibliotecas() {
    this.http.get<{ bibliotecas: any[] }>('http://localhost:5001/api/bibliotecas').subscribe({
      next: (response) => {
        this.bibliotecas = response.bibliotecas;
      },
      error: (error) => {
        console.error('Error fetching bibliotecas', error);
      }
    });
  }

  reloadBibliotecas() {
    this.loadBibliotecas(); 
  }
  

  cadastrarBiblioteca() {
    this.router.navigate(['/cadastrar-biblioteca']);
  }
}
