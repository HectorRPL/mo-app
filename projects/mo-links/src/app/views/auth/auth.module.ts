import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth.routing.module';
import { FormsMoLinksModule } from '../../components/forms-mo-links/forms-mo-links.module';
import { RegisterViewComponent } from './register-view/register-view.component';
import { LoginViewComponent } from './login-view/login-view.component';
import { ButtonsModule } from '../../components/buttons/buttons.module';
import { ShowImagesModule } from '../../components/show-images/show-images.module';


@NgModule({
  declarations: [
    RegisterViewComponent,
    LoginViewComponent,

  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsMoLinksModule,
    ButtonsModule,
    ShowImagesModule,
  ],
})
export class AuthModule {
}
