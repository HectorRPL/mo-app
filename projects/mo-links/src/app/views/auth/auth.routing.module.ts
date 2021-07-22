import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterViewComponent } from './register-view/register-view.component';


const routes: Routes = [
  {
    path: 'register',
    component: RegisterViewComponent,
  },
  {
    path: 'login',
    component: RegisterViewComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AuthRoutingModule {
}
