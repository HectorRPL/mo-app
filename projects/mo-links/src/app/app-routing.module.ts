import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'link',
    loadChildren: () => import('./views/link/link.module').then(module => module.LinkModule),
    data: {preload: true}
  },
  {
    path: 'auth',
    loadChildren: () => import('./views/auth/auth.module').then(module => module.AuthModule),
    data: {preload: true}
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
