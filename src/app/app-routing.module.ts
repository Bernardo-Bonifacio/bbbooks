// Projeto BBBOOKS

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PesquisasComponent } from './views/pesquisas/pesquisas.component';
import { HomeComponent } from './views/home/home.component';

const routes: Routes = [
  { path: 'home', title: 'BB Books', component: HomeComponent },
  {
    path: 'pesquisas',
    title: 'BB Books - Busca',
    component: PesquisasComponent,
  },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
