import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth.component';
import { AuthRoutingModule } from "./auth.routing.module";
import { FormsMoLinksModule } from '../../components/forms-mo-links/forms-mo-links.module';



@NgModule({
  declarations: [
    AuthComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsMoLinksModule,
  ],
})
export class AuthModule { }
