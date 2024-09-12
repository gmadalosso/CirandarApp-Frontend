import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/inicio/inicio.module').then( m => m.InicioPageModule),
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'cadastro',
    loadChildren: () => import('./pages/cadastro/cadastro.module').then( m => m.CadastroPageModule)
  },
  {
    path: 'lista-bibliotecas',
    loadChildren: () => import('./pages/lista-bibliotecas/lista-bibliotecas.module').then( m => m.ListaBibliotecasPageModule)
  },
  {
    path: 'info-biblioteca',
    loadChildren: () => import('./pages/info-biblioteca/info-biblioteca.module').then( m => m.InfoBibliotecaPageModule)
  },
  {
    path: 'busca-livro',
    loadChildren: () => import('./pages/busca-livro/busca-livro.module').then( m => m.BuscaLivroPageModule)
  },
  {
    path: 'reservas',
    loadChildren: () => import('./pages/reservas/reservas.module').then( m => m.ReservasPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
