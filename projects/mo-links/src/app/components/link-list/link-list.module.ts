import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LinkListComponent } from './link-list.component';
import { MatCardModule } from '@angular/material/card';
import { ButtonsModule } from '../buttons/buttons.module';


@NgModule({
  declarations: [
    LinkListComponent,
  ],
  imports: [
    CommonModule,
    MatCardModule,
    ButtonsModule,
  ],
  exports: [
    LinkListComponent,
  ],
})
export class LinkListModule {
}
