import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LinkListViewComponent } from './link-list-view/link-list-view.component';


const routes: Routes = [
  {
    path: 'list',
    component: LinkListViewComponent,
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
export class LinkRoutingModule {
}
