import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LinkComponent } from './link.component';
import { LinkRoutingModule } from "./link.routing.module";


@NgModule({
  declarations: [
    LinkComponent
  ],
  imports: [
    CommonModule,
    LinkRoutingModule
  ]
})
export class LinkModule {
}
