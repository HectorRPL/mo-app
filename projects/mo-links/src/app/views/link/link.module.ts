import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LinkRoutingModule } from './link.routing.module';
import { FormsMoLinksModule } from '../../components/forms-mo-links/forms-mo-links.module';
import { LinkListViewComponent } from './link-list-view/link-list-view.component';
import { ButtonsModule } from '../../components/buttons/buttons.module';
import { LinkListModule } from '../../components/link-list/link-list.module';
import { UserModule } from '../../components/user/user.module';
import { MatCardModule } from '@angular/material/card';


@NgModule({
  declarations: [
    LinkListViewComponent,
  ],
  imports: [
    CommonModule,
    LinkRoutingModule,
    FormsMoLinksModule,
    LinkListModule,
    ButtonsModule,
    UserModule,
    MatCardModule,
  ],
})
export class LinkModule {
}
