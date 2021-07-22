import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from "./auth.routing.module";
import { FormsMoLinksModule } from '../../components/forms-mo-links/forms-mo-links.module';
import { RegisterViewComponent } from './register-view/register-view.component';
import { LoginViewComponent } from './login-view/login-view.component';



@NgModule({
  declarations: [
    RegisterViewComponent,
    LoginViewComponent,

  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsMoLinksModule,
  ],
})
export class AuthModule { }
