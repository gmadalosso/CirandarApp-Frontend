import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  },
  {
    path: 'inicio',
    loadChildren: () => import('./pages/inicio/inicio.module').then( m => m.InicioPageModule),
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'admin-dashboard',
    loadChildren: () => import('./pages/admin-dashboard/admin-dashboard.module').then( m => m.AdminDashboardPageModule)
  },
  {
    path: 'criar-biblioteca',
    loadChildren: () => import('./pages/criar-biblioteca/criar-biblioteca.module').then( m => m.CriarBibliotecaPageModule)
  },
  {
    path: 'editar-biblioteca',
    loadChildren: () => import('./pages/editar-biblioteca/editar-biblioteca.module').then( m => m.EditarBibliotecaPageModule)
  },
  {
    path: 'pagina-inicial',
    loadChildren: () => import('./pages/pagina-inicial/pagina-inicial.module').then( m => m.PaginaInicialPageModule)
  },
  {
    path: 'lista-bibliotecas',
    loadChildren: () => import('./pages/lista-bibliotecas/lista-bibliotecas.module').then( m => m.ListaBibliotecasPageModule)
  },
  {
    path: 'info-biblioteca/:id',
    loadChildren: () => import('./pages/info-biblioteca/info-biblioteca.module').then(m => m.InfoBibliotecaPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
