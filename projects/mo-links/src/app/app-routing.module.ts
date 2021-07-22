import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'link',
    loadChildren: () => import('./views/link/link.module').then(module => module.LinkModule),
    data: {preload: false}
  },
  {
    path: 'auth',
    loadChildren: () => import('./views/auth/auth.module').then(module => module.AuthModule),
    data: {preload: false}
  },
  {
    path: '',
    redirectTo: '/auth/register',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '/auth/register'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
