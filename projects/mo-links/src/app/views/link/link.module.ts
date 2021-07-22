import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LinkRoutingModule } from "./link.routing.module";
import { FormsMoLinksModule } from '../../components/forms-mo-links/forms-mo-links.module';
import { LinkListViewComponent } from './link-list-view/link-list-view.component';


@NgModule({
  declarations: [
    LinkListViewComponent
  ],
  imports: [
    CommonModule,
    LinkRoutingModule,
    FormsMoLinksModule
  ]
})
export class LinkModule {
}
