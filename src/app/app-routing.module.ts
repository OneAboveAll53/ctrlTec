import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'cadastro',
    loadChildren: () => import('./cadastro/cadastro.module').then( m => m.CadastroPageModule)
  },
  {
    path: 'configuracoes',
    loadChildren: () => import('./configuracoes/configuracoes.module').then( m => m.ConfiguracoesPageModule)
  },
  {
    path: 'adicionar',
    loadChildren: () => import('./adicionar/adicionar.module').then( m => m.AdicionarPageModule)
  },
  {
    path: 'procurar',
    loadChildren: () => import('./procurar/procurar.module').then( m => m.ProcurarPageModule)
  },
  {
    path: 'editar-procurar',
    loadChildren: () => import('./editar-procurar/editar-procurar.module').then( m => m.EditarProcurarPageModule)
  },
  {
    path: 'adicionar-restante',
    loadChildren: () => import('./adicionar-restante/adicionar-restante.module').then( m => m.AdicionarRestantePageModule)
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
